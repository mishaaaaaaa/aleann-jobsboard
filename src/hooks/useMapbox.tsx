import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

export default function useMapboxMap(container: string) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.567898, 55.67583],
      zoom: 9,
    });
  }, []);
}
