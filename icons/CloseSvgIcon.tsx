import React from "react";

const CloseSvgIcon: React.FC<{ 
    className?: string,
    width?: number | string
    height?: number | string
  }> = ({ ...attr }) => {
  return (
    <svg
      width="28"
      height="28"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...attr}
    >
      <path
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default CloseSvgIcon;
