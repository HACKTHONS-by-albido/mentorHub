import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mentorHub",
  description: "Connecting Mentors and Mentees for Personal and Professional Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        
        </head>

      <body className={inter.className}>
      <Suspense>
        {children}
        </Suspense>
        </body>
    </html>
  );
}
