"use client"

import { ThemeContext } from "@/theme/ThemeContext";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {theme} = useContext(ThemeContext)

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Experienced full-stack developer with a focus on back-end development."
        />
        <meta name="author" content="dnachavez" />
        <meta
          name="keywords"
          content="Dan Glyde Chavez,Dan Chavez,dnachavez,Full-stack Developer,full-stack,PHP,CodeIgniter"
        />
        <meta property="og:title" content="Dan Chavez - Full-stack Developer" />
        <meta property="og:url" content="https://dnachavez.ph/" />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Experienced full-stack developer with a focus on back-end development."
        />
      </head>
      <body
        className={`${inter.className} ${theme} bg-light-fondo-primary dark:bg-dark-fondo-primary`}
      >
        {children}
      </body>
    </html>
  );
}
