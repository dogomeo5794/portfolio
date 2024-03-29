import React, { useEffect, useRef, useState } from "react";

import TechItem from "@/components/JobCard/TechItem";
import Carousel from "./Carousel";
import { ProjectProps } from "./ProjectsSection";
import "./style-modal.css"

interface Props extends ProjectProps {
  showModal?: boolean
  onCloseModal: () => void
}

const ProjectModal: React.FC<Props> = (props) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [withScroll, setWithScroll] = useState<boolean>(false);
  const {
    id,
    carouselImages,
    projectTitle,
    projectDescription,
    projectTechnologies,
    projectRepo,
    projectSite,
    showModal,
    onCloseModal
  } = props;

  const handleCloseModal = () => {
    onCloseModal()
  }

  useEffect(() => {
    if (modalRef.current) {
      const modalHeight = modalRef.current.clientHeight
      const modalCardHeight = modalRef.current.firstElementChild?.clientHeight || 0;
      if (modalCardHeight > modalHeight) {
        setWithScroll(true);
      }
      else {
        setWithScroll(false);
      }
    }
  }, [modalRef])

  return (
    <div
      data-visible={showModal}
      className="modal fixed hidden data-[visible=true]:flex justify-center top-0 left-0 w-screen h-full bg-[#0008] z-10 backdrop-blur-sm overflow-y-scroll lg:items-center"
      ref={modalRef}
      style={withScroll ? {overflow: "scroll"} : {}}
    >
      <div className="modal-content slide-down my-1 relative bg-light-fondo-secondary dark:bg-dark-fondo-secondary flex flex-col h-fit w-[95%] max-w-[600px] rounded-2xl overflow-hidden lg:grid lg:grid-cols-modal lg:max-h-[1024px] lg:max-w-[85%]">
        <Carousel images={carouselImages} path={id} />
        <article className="flex flex-col p-6 gap-8 lg:py-0 lg:mt-12 lg:mb-8">
          <h1 className="font-extrabold text-light-texto-primary dark:text-dark-texto-primary text-2xl sm:text-3xl">
            {projectTitle}
          </h1>
          <div className="flex items-center gap-2">
            {projectRepo && projectRepo.length > 0 && projectRepo.map((repo, index) => (
              <a
                href={repo}
                className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-light-texto-secondary dark:text-dark-texto-secondary bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-light-texto-primary dark:hover:bg-dark-texto-primary hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
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
                GitHub
              </a>
            ))}
            {projectSite && projectSite.length > 0 && projectSite.map((site, index) => (
              <a
                href={site}
                className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-light-texto-secondary dark:text-dark-texto-secondary bg-[#0001] dark:bg-[#fff1] transition-colors rounded-lg hover:bg-light-texto-primary dark:hover:bg-dark-texto-primary hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary"
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
                Go to site
              </a>
            ))}
          </div>
          <div>
            {projectDescription.length > 0 && projectDescription.map((description, index) => (
              <p className="text-light-texto-secondary dark:text-dark-texto-secondary text-[0.91rem] mb-[15px] last:mb-0" key={index}>
                {description}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 mb-1">
            <h2 className="text-light-texto-primary dark:text-dark-texto-primary font-bold text-[0.91rem]">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 text-light-texto-secondary dark:text-dark-texto-secondary">
              {projectTechnologies.map((technology, index) => (
                <TechItem name={technology.name} icon={technology.icon} key={index} />
              ))}
            </ul>
          </div>
        </article>
        <button
          className="bg-[#fffb] lg:bg-transparent p-[5px] text-light-texto-secondary close-modal-btn absolute top-3 right-3 lg:p-2 rounded-md lg:text-light-gray-primary dark:lg:text-dark-gray-primary hover:lg:bg-[#0001] dark:lg:hover:bg-[#fff1] hover:lg:text-light-texto-primary dark:lg:hover:text-dark-texto-primary transition-colors"
          data-target={`modal-${id}`}
          onClick={handleCloseModal}
        >
          <svg
            className="h-[18px] w-[18px] lg:w-[20px] lg:h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
