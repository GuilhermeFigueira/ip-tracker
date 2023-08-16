import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Map = dynamic(() => import("./components/Map"), {
	ssr: false,
	loading: () => <Loader2 color="#000000" className="animate-spin" />,
});
import arrow from "../../public/icon-arrow.svg";
export default function Home() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
				integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
				crossOrigin=""
			/>
			<main className="h-screen w-screen flex justify-center">
				<div className="grid [grid-template-rows:30%_1fr] h-full w-full">
					<div className="[background-image:url('/pattern-bg-mobile.png')] [grid-area:1/1/2/2] w-full h-full bg-no-repeat bg-cover z-40 shadow-2xl"></div>
					<div className="[grid-area:1/1/3/2] z-30">
						<Map />
					</div>
				</div>
				<div className="absolute flex flex-col gap-10 top-0 z-50 items-center mt-10">
					<h1 className="text-white">IP Address Tracker</h1>
					<div className="rounded-3xl h-14 w-80 flex flex-row bg-white">
						<input
							className="flex-1 rounded-l-3xl p-4"
							type="text"
						/>
						<button className="h-full bg-black rounded-r-3xl px-4">
							<Image src={arrow} alt={"Arrow icon"}></Image>
						</button>
					</div>
					<div className="bg-white rounded-lg flex flex-col gap-10">
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
			</main>
		</>
	);
}
