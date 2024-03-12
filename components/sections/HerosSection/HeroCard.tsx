import React from "react";
import { HeroProps } from "./HerosSection";
import "./style-hero-card.css"
import Image from "next/image";

const HeroCard: React.FC<HeroProps> = (props) => {
  const { heroName, heroDescription, heroPicture } = props;
  return (
    <article className="hero-card">
      <Image
        className="hero-image"
        src={`/heros/${heroPicture}`}
        alt={heroName}
        loading="lazy"
        // height="64px"
        // width="64px"
        width={100}
        height={100}
        loader={(src) => src.src}
        style={{ width: "64px", height: "64px" }}
      />

      <div className="hero-data">
        <h1 className="hero-name">{heroName}</h1>
        <p className="hero-description">{heroDescription}</p>
      </div>
    </article>
  );
};

export default HeroCard;
