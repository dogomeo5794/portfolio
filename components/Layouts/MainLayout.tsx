"use client"

import { ThemeContext } from "@/theme/ThemeContext";
import { Inter } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Experienced full-stack developer with a focus on api integrations."
        />
        <meta name="author" content="ronald.dogomeo" />
        <meta
          name="keywords"
          content="Ronald Dogomeo,Ronald,Dogomeo,ronald.dogomeo,Full-stack Developer,full-stack,NodeJS,VueJS,PHP"
        />
        <meta property="og:title" content="Ronald Dogomeo - Full-stack Web Developer" />
        <meta property="og:url" content="https://github.com/dogomeo5794" />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Experienced full-stack developer with a focus on front-end development and api integrations."
        />
      </Head>
      <body
        className={`${inter.className} ${theme} bg-light-fondo-primary dark:bg-dark-fondo-primary`}
      >
        {children}
      </body>
    </html>
  );
}
