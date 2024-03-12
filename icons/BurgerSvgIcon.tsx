import React from "react";

const BurgerSvgIcon: React.FC<{
  className?: string;
  width?: number | string;
  height?: number | string;
}> = ({ ...attr }) => {
  return (
    <svg
      width="24"
      height="24"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...attr}
    >
      <path
        d="M3 5h8M3 12h13M3 19h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default BurgerSvgIcon;
