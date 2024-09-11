import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/navbar";
import { MapProvider } from "~/providers/map-provider";

export const metadata: Metadata = {
  title: "DoeAgora",
  description:
    "Aproveite o natal e faça uma doação para deixar a noite de alguém feliz",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable}`}>
      <MapProvider>
        <body className="min-h-screen overflow-x-hidden antialiased">
          <Navbar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </MapProvider>
    </html>
  );
}
