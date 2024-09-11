"use client";

import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

export function MapComponent({
  lat = -15.7801,
  lng = -47.9292,
}: {
  lat?: number;
  lng?: number;
}) {
  return (
    <GoogleMap
      mapContainerStyle={defaultMapContainerStyle}
      center={{ lat, lng }}
      zoom={defaultMapZoom}
      options={defaultMapOptions}
    />
  );
}
