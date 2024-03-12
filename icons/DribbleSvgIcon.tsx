import React from "react";

const DribbleSvgIcon: React.FC<{ 
    className?: string,
    width?: number | string
    height?: number | string
  }> = ({ ...attr }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...attr}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
    </svg>
  );
};

export default DribbleSvgIcon;