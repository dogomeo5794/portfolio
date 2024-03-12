import React from "react";
import { EducationProps } from "./EducationSection";
import Image from "next/image";

const EducationCard: React.FC<EducationProps> = (props) => {
  const {
    id,
    educationPicture,
    educationTitle,
    educationType,
    educationTime,
    educationCompany,
    educationLink,
  } = props;

  return (
    <article className="flex gap-4">
      <div className="flex justify-center items-center bg-white object-contain rounded-3xl overflow-hidden aspect-square w-[90px] h-[90px] min-w-[90px] sm:w-[110px] sm:h-[110px] sm:min-w-[110px]">
        <Image
          className="w-full h-auto"
          src={`/education/${educationPicture}`}
          alt={`Picture of ${educationTitle} degree`}
          loading="lazy"
          width={100}
          height={100}
          loader={(src) => src.src}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          {educationType && (
            <small className="text-[0.77rem] text-light-gray-primary dark:text-dark-gray-primary">
              {educationType}
            </small>
          )}
          {educationLink ? (
            <a
              href={educationLink}
              className="text-light-texto-primary dark:text-dark-texto-primary font-bold leading-[1.1] hover:underline"
              target="_blank"
            >
              <h1>
                {educationTitle}
                <svg
                  className="inline text-light-gray-primary dark:text-dark-gray-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </>
                </svg>
              </h1>
            </a>
          ) : (
            <h1 className="text-light-texto-primary dark:text-dark-texto-primary font-bold leading-[1.1]">
              {educationTitle}
            </h1>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-[0.9rem] text-light-gray-primary dark:text-dark-gray-primary">
            {educationTime}
          </span>
          <span className="text-[0.9rem] text-light-texto-secondary dark:text-dark-texto-secondary leading-[1.1]">
            {educationCompany}
          </span>
        </div>
      </div>
    </article>
  );
};

export default EducationCard;
