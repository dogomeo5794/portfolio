"use client"

// import MainLayout from "../layouts/mainLayout.astro";
// import Topbar from "../components/Topbar.astro";
// import HomeSection from "../sections/homeSection.astro";
// import Main from "../components/main.astro";
// import AboutSection from "../sections/aboutSection.astro";
// import SkillsSection from "../sections/SkillsSection.astro";
// import JobsSection from "../sections/jobsSection.astro";
// import ProjectsSection from "../sections/ProjectsSection.astro";
// import EducationSection from "../sections/EducationSection.astro";
// import ContactSection from "../sections/ContactSection.astro";
// import Footer from "../components/footer.astro";
import Topbar from "@/components/Topbar/Topbar";
import Main from "@/components/Layouts/Sections/Main/Main";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import HomeSection from "@/components/sections/HomeSection/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection/SkillsSection";
import JobsSection from "@/components/sections/JobsSection/JobsSection";
import ProjectsSection from "@/components/sections/ProjectsSection/ProjectsSection";

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
          {/* <EducationSection /> */}
          <ContactSection />
          {/* <Footer /> */}
      </Main>
    </>
  )
}
