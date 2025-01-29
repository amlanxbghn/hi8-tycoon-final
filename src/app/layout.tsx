import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beautique = localFont({
  src: [
    {
      path: "./fonts/BeautiqueDisplay-Italic.otf",
      weight: "700",
    },
  ],
  variable: "--font-beautique",
})

export const metadata: Metadata = {
  title: "Hi8 Agency",
  description: "Elevate your Story to New Heights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beautique.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
