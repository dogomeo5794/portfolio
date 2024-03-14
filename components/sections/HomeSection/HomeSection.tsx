import { CUP_OF_COFFEE, FIRST_NAME, LAST_NAME, LINE_OF_CODES, RESUME_URL, YEAR_OF_EXPERIENCE } from "@/lib/static-data";
import React from "react";

const HomeSection = () => {
  // let sloganSeed = Math.round(Math.random());
  // console.log(`slogan${sloganSeed}`);
  // let sloganParagraph = document.getElementById(`slogan${sloganSeed}`);
  // sloganParagraph.classList.remove("hidden");
  // sloganParagraph.classList.add("inline");

  return (
    <section
      className="group-[.is-fixed-header]:pt-[82px] h-[calc(100dvh-4rem)] min-h-[580px] flex flex-col justify-center items-center text-center gap-16"
      id="home"
    >
      <div className="flex flex-col gap-12 text-center items-center justify-center">
        <h1 className="text-[1.1rem] text-light-gray-primary py-[9px] px-8 w-fit font-semibold rounded-3xl bg-[#0001] dark:bg-[#fff1] dark:text-dark-texto-secondary">
          Hi! <span className="hi inline">👋</span> I&apos;m {FIRST_NAME} {LAST_NAME}
        </h1>
        <p
          className="text-[3.3rem] sm:text-[3.3rem] md:text-[4.2rem] font-black leading-[3rem] sm:leading-[4rem] text-[#111] dark:text-[#f3f3f3]"
          id="slogan0"
        >
          Experienced <span className="text-primary">full-stack developer</span>{" "}
          with a focus on{" "}
          <span className="text-primary">back-end development</span>.
        </p>
      </div>
      <ul className="gap-3 flex justify-between items-center sm:gap-12 text-light-gray-primary dark:text-dark-gray-primary w-[calc(100dvw-5rem)] sm:w-fit">
        <li className="flex flex-col sm:flex-row items-center gap-2">
          <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
            {YEAR_OF_EXPERIENCE}
          </span>
          <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
            Years of
            <br />
            experience
          </span>
        </li>
        <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
        <li className="flex flex-col sm:flex-row items-center gap-2">
          <span
            className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl"
            id="code-lines"
          >
            {LINE_OF_CODES}
          </span>
          <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
            Lines of
            <br />
            code written
          </span>
        </li>
        <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
        <li className="flex flex-col sm:flex-row items-center gap-2">
          <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
            {CUP_OF_COFFEE}
          </span>
          <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
            Cups of coffee
            <br />
            consumed everyday
          </span>
        </li>
      </ul>
      <div className="flex items-center gap-2 sm:gap-6">
        <a
          href={RESUME_URL}
          target="_blank"
          className="justify-center py-4 px-10 flex items-center gap-1 sm:gap-2 font-semibold text-[1.15rem] rounded-[28rem] bg-light-texto-primary dark:bg-dark-texto-primary text-light-fondo-primary dark:text-dark-fondo-primary hover:scale-[1.05] transition-transform"
        >
          <svg
            width="26"
            height="26"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
          <span>Resume</span>
        </a>
        <a
          href="#contact"
          className="justify-center py-4 px-10 flex items-center gap-1 sm:gap-2 font-semibold text-[1.15rem] rounded-[28rem] bg-dark-texto-primary dark:bg-light-texto-primary text-dark-fondo-primary dark:text-light-fondo-primary hover:scale-[1.05] transition-transform"
        >
          <svg
            width="26"
            height="26"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
          >
            <path
              d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>Contact</span>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
