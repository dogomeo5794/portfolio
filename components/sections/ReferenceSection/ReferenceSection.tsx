import React from "react";

import ReferenceSectionCard from "./ReferenceSectionCard";
import { references } from "@/lib/references-data";
import "./style.css";

export interface ReferenceProps {
  name: string
  picture: string
  description: string
  position: string
  mobile: string
  email: string
  media: string
}

const ReferenceSection: React.FC = () => {
  return (
    <section>
      <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]">
        References<span className="text-primary">.</span>
      </h1>
      <div className="references-grid">
        {references.map((reference: ReferenceProps, index: number) => (
          <ReferenceSectionCard {...reference} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ReferenceSection;
