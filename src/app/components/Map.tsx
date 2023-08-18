"use client";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useCoordinateStates } from "../states/coordinate-states";
import { useEffect } from "react";

interface coordinateType {
	lat: number;
	lng: number;
}

export default function Map() {
	const { lat, lng } = useCoordinateStates();
	const RecenterAutomatically = ({ lat, lng }: coordinateType) => {
		const map = useMap();
		useEffect(() => {
			map.setView([lat, lng]);
		}, [lat, lng, map]);
		return null;
	};
	return (
		<>
			<link
				rel="stylesheet"
				href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
				integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
				crossOrigin=""
			/>
			<MapContainer
				center={[lat, lng]}
				zoom={15}
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
					position={[lat, lng]}
				></Marker>
				<RecenterAutomatically lat={lat} lng={lng} />
			</MapContainer>
		</>
	);
}
