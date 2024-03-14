import React from "react";
import { ProjectProps } from "./ProjectsSection";
import Image from "next/image";

interface Props extends ProjectProps {
  onOpenModal: (project: ProjectProps) => void
}

const ProjectCard: React.FC<Props> = (props) => {
  const {
    id,
    carouselImages,
    projectTitle,
    projectRepo,
    projectSite,
    projectSlogan,
    projectDescription,
    projectTechnologies,
    onOpenModal
  } = props;

  const handleOpenModal = () => {
    onOpenModal({
      id,
      carouselImages,
      projectTitle,
      projectRepo,
      projectSite,
      projectSlogan,
      projectDescription,
      projectTechnologies,
    })
  }

  return (
    <article className="flex flex-col bg-transparent gap-2 overflow-hidden">
      <div
        className="group flex flex-col items-center justify-center rounded-3xl overflow-hidden open-modal-btn"
        onClick={handleOpenModal}
      >
        <Image
          className="w-full h-fit transition-transform group-hover:scale-[1.05] group-hover:cursor-pointer"
          src={`/projects/${id}/${carouselImages[0]}`}
          alt={`Logo of ${projectTitle} project`}
          loading="lazy"
          width={100}
          height={100}
          loader={(src) => `${src.src}?w=${src.width}`}
        />
      </div>
      <div className="flex items-center justify-between gap-2 max-h-full overflow-hidden">
        <div className="flex flex-col items-start justify-center overflow-hidden">
          <h1 className="font-extrabold text-light-texto-primary dark:text-dark-texto-primary text-[1.1rem] -mb-[3px] text-ellipsis overflow-hidden whitespace-nowrap w-full">
            {projectTitle}
          </h1>
          <span className="text-light-gray-primary dark:text-dark-gray-primary text-ellipsis overflow-hidden whitespace-nowrap w-full text-[0.91rem]">
            {projectSlogan}
          </span>
        </div>
        <div className="flex w-fit gap-1">
          {projectRepo && projectRepo.length > 0 && projectRepo.map((repo, index) => (
            <a
              href={repo}
              className="justify-center p-2 flex items-center gap-1 font-semibold text-[0.91rem] text-light-texto-secondary dark:text-dark-texto-secondary bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-light-texto-primary dark:hover:bg-dark-texto-primary hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
              target="_blank"
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <>
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </>
              </svg>
            </a>
          ))}
          {projectSite && projectSite.length > 0 && projectSite.map((site, index) => (
            <a
              href={site}
              className="justify-center p-2 flex items-center gap-1 font-semibold text-[0.91rem] text-light-texto-secondary dark:text-dark-texto-secondary bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-light-texto-primary dark:hover:bg-dark-texto-primary hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
              target="_blank"
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
