"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import Image from "next/image";
import arrow from "../../../public/icon-arrow.svg";

export default function Menu() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<MenuContent />
		</QueryClientProvider>
	);
}

function MenuContent() {
	return (
		<div className="absolute flex flex-col gap-6 top-0 z-50 items-center mt-4">
			<h1 className="text-white text-2xl">IP Address Tracker</h1>
			<div className="rounded-2xl h-14 w-80 flex flex-row bg-white shadow-2xl">
				<input className="flex-1 rounded-l-2xl p-4" type="text" />
				<button className="h-full bg-black rounded-r-2xl px-6">
					<Image src={arrow} alt={"Arrow icon"} />
				</button>
			</div>
			<div className="bg-white rounded-2xl flex flex-col gap-6 w-80 text-center py-4 shadow-2xl">
				<div>
					<h2>Ip Address </h2>
					<h3>192.212.174.101</h3>
				</div>
				<div>
					<h2>Location</h2>
					<h3>Brooklyn, NY 10001</h3>
				</div>
				<div>
					<h2>Timezone</h2>
					<h3>UTC-05:00</h3>
				</div>
				<div>
					<h2>Isp</h2>
					<h3>SpaceX Starlink</h3>
				</div>
			</div>
		</div>
	);
}
