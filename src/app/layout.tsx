import "~/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {clx} from "~/app/utils"
import Footer from "~/app/_components/footer"

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "nannipernazza.com",
  description: "nannipernazza.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={clx(GeistSans.className, GeistMono.className, "bg-black")}>
      <body >
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Footer />
      </body>
    </html>
  );
}



