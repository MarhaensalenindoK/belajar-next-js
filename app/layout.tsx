"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeaderLayout from "./headerLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="description" content="Web portofolio tailwind"/>
      <meta name="keyword" content="tailwindcss, CSS, tailwind"/>
      <meta name="author" content="codemarhaen"/>
      <body className={inter.className + " bg-darkBlue text-cream"}>
        <HeaderLayout />

        {children}
      </body>
    </html>
  );
}
