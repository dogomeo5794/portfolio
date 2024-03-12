import { FIRST_NAME, LAST_NAME, YEAR_OF_EXPERIENCE } from "@/lib/static-data";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row pt-24 pb-20 items-center gap-16">
      <article className="flex flex-col gap-14">
        <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]">
          About me<span className="text-primary">.</span>
        </h1>
        <div className="flex flex-col gap-4 text-[1.1rem] sm:text-base text-light-texto-secondary dark:text-dark-texto-secondary">
          <p>
            With {YEAR_OF_EXPERIENCE} years in web development, I specialize in full-stack with a
            focus on front-end and API integrations. Experienced in optimizing
            productivity, I thrive in dynamic environments. Excited to
            contribute to meaningful projects, using my skills fully, especially
            front-end, to drive innovation and excellence. Committed to
            excellence, continuous learning, and collaboration.
          </p>
        </div>
      </article>
      <Image
        className="rounded-full h-[170px] w-[170px] sm:w-[200px] sm:h-[200px]"
        src="/images/me.png"
        alt={`${FIRST_NAME} ${LAST_NAME} - Full-stack Developer`}
        loading="lazy"
        width={100}
        height={100}
        loader={(src) => src.src}
      />
    </section>
  );
};

export default AboutSection;
