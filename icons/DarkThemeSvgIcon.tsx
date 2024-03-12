import React from "react";

const DarkThemeSvgIcon: React.FC<{
  className?: string;
  width?: number | string;
  height?: number | string;
}> = ({ ...attr }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...attr}
    >
      <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
};

export default DarkThemeSvgIcon;
