"use client";
import { CldImage, type CldImageProps } from "next-cloudinary";

export function CloudImage(props: CldImageProps) {
  return <CldImage dpr={"auto"} {...props} />;
}
