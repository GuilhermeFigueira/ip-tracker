import { create } from "zustand";

interface coordinateStates {
	lat: number;
	setLat: (lat: number) => void;
	lng: number;
	setLng: (lng: number) => void;
}

export const useCoordinateStates = create<coordinateStates>()((set) => ({
	lat: 0,
	setLat: (lat: number) => set({ lat }),
	lng: 0,
	setLng: (lng: number) => set({ lng }),
}));
