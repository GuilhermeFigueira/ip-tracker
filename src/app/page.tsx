import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/Map"), {
	ssr: false,
	loading: () => (
		<Loader2 color="#000000" size={40} className="animate-spin" />
	),
});
const Menu = dynamic(() => import("./components/Menu"), {
	ssr: false,
	loading: () => (
		<div className="absolute top-1/4 z-50 items-center ">
			<Loader2 color="#fff" className="animate-spin" size={80} />
		</div>
	),
});

export default function Home() {
	return (
		<>
			<main className="h-screen w-screen flex justify-center">
				<div className="grid [grid-template-rows:40%_1fr] lg:[grid-template-rows:30%_1fr] h-full w-full">
					<div className="[background-image:url('/pattern-bg-mobile.webp')] lg:[background-image:url('/pattern-bg-desktop.webp')] w-full h-full bg-no-repeat bg-cover z-40 shadow-2xl"></div>
					<div className="z-30 flex justify-center items-center">
						<Map />
					</div>
				</div>
				<Menu />
			</main>
		</>
	);
}
