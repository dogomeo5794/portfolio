import React from "react";

import HeroCard from "./HeroCard";
import { heros } from "@/lib/heros-data";
import "./style.css";

export interface HeroProps {
  heroName: string
  heroPicture: string
  heroDescription: string
}

const HerosSection: React.FC = () => {
  return (
    <section>
      <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]">
        My heroes<span className="text-primary">.</span>
      </h1>
      <p className="dark:text-dark-texto-primary">A small tribute to the people who inspire me.</p>
      <div className="heros-grid">
        {heros.map((hero: HeroProps, index: number) => (
          <HeroCard {...hero} key={index} />
        ))}
      </div>
    </section>
  );
};

export default HerosSection;
