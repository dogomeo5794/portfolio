import React from "react";

interface Props {
  onToggleAccordion?: () => void
  showMore?: boolean
}

const AccordionButton: React.FC<Props> = (props) => {
  const { onToggleAccordion, showMore } = props;

  const handleToggleAccordion = () => {
    if (typeof onToggleAccordion === "function") {
      onToggleAccordion();
    }
  }

  return (
    <button
      className={`${showMore ? 'expanded ' : ''}accordion-button group mt-6 w-fit justify-center py-3 px-5 pr-6 flex items-center gap-1 sm:gap-2 font-semibold text-base text-light-texto-secondary dark:text-dark-texto-secondary bg-[#0001] dark:bg-[#fff1] transition-colors rounded-3xl hover:bg-light-texto-primary dark:hover:bg-dark-texto-primary hover:text-light-fondo-primary dark:hover:text-dark-fondo-primary`}
      onClick={handleToggleAccordion}
    >
      <svg
        className="group-[.expanded]:rotate-180 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      {!showMore && <span className="flex">See more</span>}
      {showMore && <span className="flex">See less</span>}
    </button>
  );
};

export default AccordionButton;
