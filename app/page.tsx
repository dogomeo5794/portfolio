"use client"

import Topbar from "@/components/Topbar/Topbar";
import Main from "@/components/Layouts/Sections/Main/Main";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import HomeSection from "@/components/sections/HomeSection/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection/SkillsSection";
import JobsSection from "@/components/sections/JobsSection/JobsSection";
import ProjectsSection from "@/components/sections/ProjectsSection/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection/EducationSection";
import FooterSection from "@/components/sections/FooterSection/FooterSection";
import ReferenceSection from "@/components/sections/ReferenceSection/ReferenceSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <Main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <JobsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <ReferenceSection />
          <FooterSection />
      </Main>
    </>
  )
}
