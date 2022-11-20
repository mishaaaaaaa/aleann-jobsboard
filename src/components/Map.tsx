import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import useMapboxMap from "../hooks/useMapbox";

export default function Map() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWlzaGFhYWFhYWEiLCJhIjoiY2xhcHNwNTE1MGY2ejNxcWV4dnE4emRudSJ9.Ku1b2RSe1ERLP0r8hvNw6w";

  useMapboxMap("map");

  return (
    <div className="w-full md:w-3/4 h-80 md:ml-20 rounded" id="map">
      hello
    </div>
  );
}
