import React from "react";

import EducationCard from "./EducationCard";
import { educations } from "@/lib/educations-data";

export interface EducationProps {
  id: string
  educationPicture: string
  educationTitle: string
  educationType: string
  educationTime: string
  educationCompany: string
  educationLink?: string
}

const EducationSection = () => {
  return (
    <section className="flex flex-col pt-16 pb-20 gap-16" id="education">
      <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-3xl sm:text-4xl">
        Education<span className="text-primary">.</span>
      </h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {educations.map((education: EducationProps, index: number) => (
          <EducationCard {...education} key={index} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
