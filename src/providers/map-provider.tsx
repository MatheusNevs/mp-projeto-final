"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import { env } from "~/env";

export function MapProvider({ children }: React.PropsWithChildren) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: ["places", "drawing", "geometry"],
  }) as { isLoaded: boolean; loadError: unknown };

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return children;
}
