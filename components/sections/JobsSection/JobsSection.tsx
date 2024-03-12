import React from "react";

import JobCard from "@/components/JobCard/JobCard";
import { jobs } from "@/lib/jobs-data";

const JobsSection = () => {
  return (
    <section className="flex flex-col pt-16 pb-20 gap-16" id="jobs">
      <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]">
        Experience<span className="text-primary">.</span>
      </h1>
      <div className="relative flex flex-col gap-20">
        {jobs.map((job, index) => (
          <JobCard {...job}  key={index} />
        ))}
        <div className="absolute left-0 border-l-[1px] h-full z-[-1] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary sm:left-[50%]"></div>
      </div>
    </section>
  );
};

export default JobsSection;
