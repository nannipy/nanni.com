import "../styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clx } from "../app/utils";
import Footer from "./_components/footer";
import { TRPCReactProvider } from "../trpc/react";
import AuthProvider from "./_components/AuthProvider";
import ClientOnly from "./_components/ClientOnly";

export const metadata: Metadata = {
  metadataBase: new URL("https://nannipy.vercel.app"),
  title: {
    default: "Giovanni Battista Pernazza",
    template: "%s | Giovanni Battista Pernazza",
  },
  description: "Giovanni Battista Pernazza: Developer, Software Engineer, Entrepreneur",
  openGraph: {
    title: "Giovanni Battista Pernazza",
    description: "Developer, Software Engineer, Entrepreneur",
    url: "https://nannipy.vercel.app",
    siteName: "Giovanni Battista Pernazza",
    locale: "en_US",
    type: "website",
    images: ["https://nannipy.vercel.app"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: "index, follow",
  },
  applicationName: "Giovanni Battista Pernazza",
  creator: "Giovanni Battista Pernazza",
  keywords: [
    "Giovanni Battista Pernazza",
    "developer",
    "entrepreneur",
    "blog",
    "portfolio",
    "full stack",
  ],
  twitter: {
    title: "Giovanni Battista Pernazza",
    card: "summary_large_image",
    creator: "@nannipy",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://nannipy.vercel.app/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clx(GeistSans.className, GeistMono.className, "bg-black")}>
      <body className="bg-black font-face md:px-40">
        <ClientOnly>
          <AuthProvider>
            <TRPCReactProvider>
              {children}
            </TRPCReactProvider>
          </AuthProvider>
        </ClientOnly>
        <Footer />
      </body>
    </html>
  );
}



