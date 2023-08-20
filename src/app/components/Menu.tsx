"use client";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Image from "next/image";
import arrow from "../../../public/icon-arrow.svg";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useCoordinateStates } from "../states/coordinate-states";
// import { useIpStates } from "../states/ip-states";

export default function Menu() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<MenuContent />
		</QueryClientProvider>
	);
}

function MenuContent() {
	const [ip, setIp] = useState<string>("-");
	const [location, setLocation] = useState<string>("-");
	const [timezone, setTimezone] = useState<string>("-");
	const [isp, setIsp] = useState<string>("-");
	const { setLat, setLng } = useCoordinateStates();

	const { isLoading, refetch } = useQuery({
		queryFn: () => {
			const data = axios.get(
				`https://geo.ipify.org/api/v2/country,city?apiKey=at_K6qnx8Voje6Dp20rBfQbB68unJ4em&ipAddress=${ip}`
			);

			return data;
		},
		enabled: false,
		onSuccess(data) {
			setLocation(
				`${data.data.location.city}, ${data.data.location.region} ${data.data.location.postalCode}`
			);
			setTimezone(`UTC ${data.data.location.timezone}`);
			setIsp(data.data.isp);
			setLat(data.data.location.lat);
			setLng(data.data.location.lng);
		},
	});

	return (
		<div className="absolute flex flex-col  gap-6 lg:gap-14 top-0 z-50 items-center mt-4 lg:mt-10">
			<h1 className="text-white text-2xl lg:text-3xl">
				IP Address Tracker
			</h1>
			<div className="rounded-2xl h-14 w-80 lg:w-[30rem] flex flex-row bg-white shadow-2xl">
				<input
					placeholder=""
					className="flex-1 rounded-l-2xl p-4"
					type="text"
					onChange={(e) => setIp(e.target.value)}
				/>
				<button
					onClick={() => refetch()}
					className="h-full bg-black rounded-r-2xl px-6"
				>
					<Image src={arrow} alt={"Arrow icon"} />
				</button>
			</div>
			<div className="bg-white rounded-2xl flex flex-col lg:flex-row lg:px-4 lg:py-8 lg:w-fit  gap-6 w-80 text-center py-4 shadow-2xl lg:text-left">
				<div className=" lg:p-4 items-center flex flex-col">
					<h2>Ip Address </h2>
					<h3>
						{isLoading ? <Loader2 className="animate-spin" /> : ip}
					</h3>
				</div>
				<div className="lg:border-l-2 lg:p-4 items-center flex flex-col">
					<h2>Location</h2>
					<h3>
						{isLoading ? (
							<Loader2 className="animate-spin" />
						) : (
							location
						)}
					</h3>
				</div>
				<div className="lg:border-l-2 lg:p-4 items-center flex flex-col">
					<h2>Timezone</h2>
					<h3>
						{isLoading ? (
							<Loader2 className="animate-spin" />
						) : (
							timezone
						)}
					</h3>
				</div>
				<div className="lg:border-l-2 lg:p-4 items-center flex flex-col">
					<h2>Isp</h2>
					<h3>
						{isLoading ? <Loader2 className="animate-spin" /> : isp}
					</h3>
				</div>
			</div>
		</div>
	);
}
