import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/lib/projects-data";

type Technology = {
  name: string
  icon: string
}

export interface ProjectProps {
  id: string
  carouselImages: Array<string>
  projectTitle: string
  projectDescription: string
  projectTechnologies: Array<Technology>
  projectRepo?: string
  projectSite?: string
  projectSlogan?: string
}

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const handleOpenModal = (project: ProjectProps) => {
    setSelectedProject(project)
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <section
        className="projects-section flex pt-16 pb-20 flex-col gap-12"
      >
        <h1 className="font-black text-light-texto-primary dark:text-dark-texto-primary text-[2.5rem]">
          Projects<span className="text-primary">.</span>
        </h1>
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 md:gap-x-12 md:gap-y-12 sm:gap-x-6 sm:gap-y-12">
          {projects.map((project, index) => (
            <ProjectCard {...project} onOpenModal={handleOpenModal} key={index} />
          ))}
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal {...selectedProject} showModal={showModal} onCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectsSection;
