import React, { useEffect, useState } from "react";

// import Logo from "./logo.astro";
// import Menu from "./menu.astro";
// import ThemeToggle from "./themeToggle.astro";

import LogoIcon from "../Layouts/Sections/LogoIcon/LogoIcon";
import Menu from "../Layouts/Sections/Menu/Menu";
import ThemToggle from "../Layouts/Sections/ThemeToggle/ThemeToggle";

const Topbar = () => {
  const [isBordered, setIsBordered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 130) {
        setIsBordered(true);
      } else {
        setIsBordered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  
  return (
    <nav className={`${isBordered ? 'bordered' : ''} group-[.is-fixed-header]:fixed group-[.is-fixed-header]:w-full group-[.is-fixed-header]:bg-light-fondo-primary group-[.is-fixed-header]:dark:bg-dark-fondo-primary group-[.is-fixed-header]:z-[9999] group-[.is-fixed-header]:h-[80px]`}>
      <div className="flex justify-between items-center pt-4 w-[90vw] mx-auto lg:w-[900px]">
        <LogoIcon />
        <ThemToggle />
        <Menu />
      </div>
    </nav>
  );
};

export default Topbar;
