import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

export default function useMapboxMap(container: string, location: any) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.567898, 55.67583], //invalid location was given, so i hardcoded location
      zoom: 9,
    });
  }, []);
}
