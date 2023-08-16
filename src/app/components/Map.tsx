"use client";
import { LatLng } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
	return (
		<MapContainer
			// center={[ip.lat, ip.lng]}
			center={[51.505, -0.09]}
			zoom={13}
			className="h-full w-full"
			scrollWheelZoom
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				position={[51.505, -0.09]} // position={[ip.lat, ip.lng]}
			>
				<Popup>You are here</Popup>
			</Marker>
		</MapContainer>
	);
}
