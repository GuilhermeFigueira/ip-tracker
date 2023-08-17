"use client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
export default function Map() {
	return (
		<MapContainer
			// center={[ip.lat, ip.lng]}
			center={[51.505, -0.09]}
			zoom={13}
			className="h-full w-full"
			scrollWheelZoom
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				icon={L.icon({ iconUrl: "/icon-location.svg" })}
				position={[51.505, -0.09]} // position={[ip.lat, ip.lng]}
			></Marker>
		</MapContainer>
	);
}
