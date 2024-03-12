import React from "react";

import LogoIcon from "@/components/Layouts/Sections/LogoIcon/LogoIcon";
import { FIRST_NAME, GITHUB_PORTFOLIO_THEME, LAST_NAME, RESUME_URL } from "@/lib/static-data";
const thumbnail = "/music/tugmangpreso.webp";
const artist = "Loonie";
const song = "Tugmang Preso";
const link = "https://open.spotify.com/track/3iF6qURjmUsozda5wS6nkz";

const FooterSection = () => {
  return (
    <footer className="flex flex-col border-t-[1px] border-[#0001] dark:border-[#ffffff15] py-10 gap-14">
      <section className="flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between">
        <div className="flex gap-2 items-center font-bold text-light-texto-primary dark:text-dark-texto-primary">
          <LogoIcon />
          {FIRST_NAME} {LAST_NAME}
        </div>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8">
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#home"
            >
              Start
            </a>
          </li>
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#jobs"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="text-light-texto-secondary dark:text-dark-texto-secondary font-medium text-[0.91rem] hover:text-light-texto-primary dark:hover:text-dark-texto-primary transition-colors hover:underline"
              href={RESUME_URL}
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col sm:flex-row sm:items-center gap-8 sm:justify-between">
        <div className="flex flex-col gap-2">
          <small className="text-light-gray-primary dark:text-dark-gray-primary text-[0.75rem]">
            Weekly music discovery:
          </small>
          <a
            className="flex items-center gap-3 p-1 hover:bg-[#0001] dark:hover:bg-[#fff1] rounded-2xl"
            href={link}
            target="_blank"
          >
            <img
              src={thumbnail}
              alt={`Song thumbnail of the song ${song} by ${artist}`}
              className="flex items-center justify-center text-[0.7rem] text-center h-20 w-20 sm:w-12 sm:h-12 bg-light-gray-secondary dark:bg-dark-gray-secondary rounded-xl"
              loading="lazy"
            />
            <div className="flex flex-col">
              <p className="text-light-texto-primary dark:text-dark-texto-primary font-extrabold -mb-1">
                {song}
              </p>

              <span className="text-light-gray-primary dark:text-dark-gray-primary text-[0.81rem]">
                {artist}
              </span>
            </div>
          </a>
        </div>
        <small className="text-light-gray-primary dark:text-dark-gray-primary text-[0.75rem] max-w-md sm:text-end">
          This portfolio is open source. Feel free to use it, but don't forget
          to leave a ⭐ on the repo. You can find the repository{" "}
          <a
            className="text-light-texto-primary dark:text-dark-texto-primary hover:underline"
            href={GITHUB_PORTFOLIO_THEME}
            target="_blank"
          >
            here
          </a>
          .
        </small>
      </section>
    </footer>
  );
};

export default FooterSection;
