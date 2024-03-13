import React, { useState } from "react";

import AccordionButton from "./AccordionButton";
import TechItem from "./TechItem";
import "./style.css";
import Image from "next/image";

type Technology = {
  name: string
  icon: string
}

interface Props {
  id: string
  jobPicture: string
  jobTitle: string
  jobTime: string
  jobCompany: string
  jobCompanySite: string
  jobDescription: string
  jobActivities: Array<string>
  jobTechnologies: Array<Technology>
}

const JobCard: React.FC<Props> = (props) => {
  
  const {
    id,
    jobPicture,
    jobTitle,
    jobTime,
    jobCompany,
    jobCompanySite,
    jobDescription,
    jobActivities,
    jobTechnologies,
  } = props;

  const [showMore, setShowMore] = useState<boolean>(false)

  const handleToggleAccordion = () => {
    setShowMore(prevState => !prevState)
  }

  return (
    <article className="job-card group relative flex flex-col pl-6 gap-4 sm:w-[50%] sm:even:translate-x-full pr-0 sm:odd:pl-0 odd:pr-6">
      <span className="circle gradient absolute top-0 left-[-10px] h-[24px] w-[24px] rounded-full z-[1]"></span>
      <div className="job-picture top-0 p-2 flex flex-col justify-center items-center gap-4 sm:absolute h-[120px] w-[120px] object-contain rounded-3xl bg-white">
        <Image
          className="w-full h-auto"
          src={`/jobs/${jobPicture}`}
          alt={`Logo of ${jobCompany} where I worked as a ${jobTitle}`}
          loading="lazy"
          width={100}
          height={100}
          loader={(src) => `${src.src}?w=${src.width}`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col mb-4">
          <h1 className="text-light-texto-primary dark:text-dark-texto-primary font-black text-xl">
            {jobTitle}
          </h1>
          <a href={jobCompanySite} target="_blank">
            <span
              className="text-light-gray-primary dark:text-dark-gray-primary font-bold text-base"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {jobCompany}
              {jobCompanySite && (
                <svg
                  className="inline text-light-gray-primary dark:text-dark-gray-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </>
                </svg>
              )}
            </span>
          </a>
          <small className="mt-1 text-light-gray-primary dark:text-dark-gray-primary italic text-[0.91rem]">
            {jobTime}
          </small>
        </div>
        <p className="text-[1.1rem] sm:text-base text-light-texto-secondary dark:text-dark-texto-secondary">
          {jobDescription}
        </p>
        <div
          // className={`accordion flex flex-col overflow-hidden transition-all gap-6 duration-300 ${showMore ? 'max-h-accordion-expanded' : 'max-h-0'}`}
          className={`accordion flex flex-col overflow-hidden transition-all gap-6 duration-300 ${showMore ? 'max-h-full' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-light-texto-primary dark:text-dark-texto-primary font-bold">
              Activities
            </h2>
            <ul className="ml-6 text-light-texto-secondary dark:text-dark-texto-secondary list-outside list-disc">
              {jobActivities.map((activity: string, index: number) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 mb-1">
            <h2 className="text-light-texto-primary dark:text-dark-texto-primary font-bold">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 text-light-texto-secondary dark:text-dark-texto-secondary">
              {jobTechnologies.map((technology, index) => (
                <TechItem name={technology.name} icon={technology.icon} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <AccordionButton showMore={showMore} onToggleAccordion={handleToggleAccordion} />
      </div>
    </article>
  );
};

export default JobCard;
