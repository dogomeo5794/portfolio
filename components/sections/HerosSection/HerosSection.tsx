import React from 'react'

import HeroCard from "../components/HeroCard.astro";
import heros from "../data/heros.json";

const HerosSection = () => {
  return (
    <section>
    <h1
        className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]"
    >
        My heroes<span className="text-primary">.</span>
    </h1>
    <p>A small tribute to the people who inspire me.</p>
    <div className="heros-grid">
        {heros.map((hero) => <HeroCard {...hero} />)}
    </div>
</section>
  )
}

export default HerosSection
