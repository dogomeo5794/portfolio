import React, { useEffect, useState } from "react";
import SkillSvgIcon from "@/icons/SkillSvgIcon";
import ExperienceSvgIcon from "@/icons/ExperienceSvgIcon";
import ProjectSvgIcon from "@/icons/ProjectSvgIcon";
import EducationSvgIcon from "@/icons/EducationSvgIcon";
import LinkedInSvgIcon from "@/icons/LinkedInSvgIcon";
import GitHubSvgIcon from "@/icons/GitHubSvgIcon";
import InstagramSvgIcon from "@/icons/InstagramSvgIcon";
import TikTokSvgIcon from "@/icons/TikTokSvgIcon";
// import DribbleSvgIcon from "@/icons/DribbleSvgIcon";
// import CodePenSvgIcon from "@/icons/CodePenSvgIcon";
import CloseSvgIcon from "@/icons/CloseSvgIcon";
import BurgerSvgIcon from "@/icons/BurgerSvgIcon";
import { GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TIKTOK_LINK } from "@/lib/static-data";

type TypeMenuLink = {
  icon: React.JSX.Element,
  dataIcon: string,
  label: string,
  tag?: string,
  target?: string,
}

const MenuLinks: Array<TypeMenuLink> = [
  {
    icon: <SkillSvgIcon />,
    dataIcon: "skills",
    label: "Skills",
    tag: "#skills",
    target: "_self"
  },
  {
    icon: <ExperienceSvgIcon />,
    dataIcon: "jobs",
    label: "Experience",
    tag: "#jobs",
    target: "_self"
  },
  {
    icon: <ProjectSvgIcon />,
    dataIcon: "projects",
    label: "Projects",
    tag: "#projects",
    target: "_self"
  },
  {
    icon: <EducationSvgIcon />,
    dataIcon: "education",
    label: "Education",
    tag: "#education",
    target: "_self"
  },
  // {
  //   icon: <EducationSvgIcon />,
  //   dataIcon: "contact",
  //   label: "Contact",
  //   tag: "#contact",
  //   target: "_self"
  // },
  // {
  //   icon: <EducationSvgIcon />,
  //   dataIcon: "references",
  //   label: "References",
  //   tag: "#references",
  //   target: "_self"
  // },
  {
    icon: <LinkedInSvgIcon />,
    dataIcon: "linkedin",
    label: "LinkedIn",
    tag: LINKEDIN_LINK,
    target: "_blank"
  },
  {
    icon: <GitHubSvgIcon />,
    dataIcon: "github",
    label: "GitHub",
    tag: GITHUB_LINK,
    target: "_blank"
  },
  {
    icon: <InstagramSvgIcon />,
    dataIcon: "instagram",
    label: "Instagram",
    tag: INSTAGRAM_LINK,
    target: "_blank"
  },
  {
    icon: <TikTokSvgIcon />,
    dataIcon: "tiktok",
    label: "TikTok",
    tag: TIKTOK_LINK,
    target: "_blank"
  },
  // {
  //   icon: <DribbleSvgIcon />,
  //   dataIcon: "dribbble",
  //   label: "Dribbble",
  //   tag: "https://dribbble.com",
  //   target: "_blank"
  // },
  // {
  //   icon: <CodePenSvgIcon />,
  //   dataIcon: "codepen",
  //   label: "CodePen",
  //   tag: "https://codepen.io",
  //   target: "_blank"
  // },
]

const Menu = () => {
  const [activeIcon, setActiveIcon] = useState<React.JSX.Element | null>(MenuLinks[0].icon);
  const [isBtnActive, setIsBtnActive] = useState<Boolean>(false);
  const handleClickedButton = () => {
    setIsBtnActive(prevState => !prevState);
  }

  const handleMouseOver = (menu: TypeMenuLink) => {
    setActiveIcon(menu.icon)
  }

  const handleMouseLeave = () => {
    setActiveIcon(null);
  }

  const handleClickedMenuItem = () => {
    setIsBtnActive(false);
  }

  useEffect(() => {
    document.body.style.overflow = isBtnActive ? "hidden" : "auto";
  }, [isBtnActive])

  return (
    <div className="">
      <button
        data-active={isBtnActive}
        className="p-2 group relative rounded-xl text-light-gray-primary dark:text-dark-gray-primary hover:bg-[#0001] dark:hover:bg-[#fff1] hover:text-light-texto-primary dark:hover:text-dark-texto-primary data-[active=true]:z-[51]"
        onClick={handleClickedButton}
      >
        {isBtnActive ? <CloseSvgIcon /> : <BurgerSvgIcon className="rotate-180" />}
      </button>
      <ul
        data-active={isBtnActive}
        data-icon=""
        className="group/icon data-[active=true]:flex flex-col justify-center gap-1 fixed right-0 data-[active=true]:top-0 -top-[200%] w-[100dvw] h-[100dvh] z-50 border-[#0001] dark:border-[#fff1] bg-light-fondo-secondary dark:bg-dark-fondo-secondary overflow-hidden transition-all overflow-y-scroll"
        style={{ transitionDuration: "300ms" }}
      >
        {MenuLinks.length > 0 && MenuLinks.map((menu, index) => (
          <li key={index} className="z-[1]">
            <a
              data-icon={menu.dataIcon}
              className="menu-item flex items-center py-4 pl-20 md:pl-[calc((100vw-900px)/2)] text-[2rem] font-extrabold gap-8 text-light-gray-primary hover:text-light-texto-primary dark:text-dark-gray-primary hover:dark:text-dark-texto-primary md:hover:pl-[calc((100vw-900px)/2+2rem)] transition-all"
              href={menu.tag}
              target={menu.target}
              onMouseOver={() => handleMouseOver(menu)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClickedMenuItem}
            >
              {menu.icon}
              {menu.label}
            </a>
          </li>
        ))}

        {activeIcon && (
          React.cloneElement(activeIcon, { 
            className: 'text-[#bbb] dark:text-[#333] group-data-[icon=skills]/icon:opacity-100 transition-opacity hidden md:block absolute -bottom-20 -right-20',
            width: 512,
            height: 512,
          })
        )}
      </ul>
    </div>
  );
};

export default Menu;
