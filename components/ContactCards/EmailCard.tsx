import React from "react";
import { EMAIL_ADDRESS_DISPLAY, EMAIL_ADDRESS_LINK } from "@/lib/static-data";

const EmailCard = () => {
  return (
    <li className="flex items-center gap-2 overflow-hidden">
      <svg
        className="h-auto w-[53px] min-w-[53px] text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      <div className="flex flex-col justify-center">
        <small className="text-light-gray-primary dark:text-dark-gray-primary font-medium">
          Send me an email:
        </small>
        <a
          className="font-bold text-light-texto-primary dark:text-dark-texto-primary text-[1.1rem] hover:cursor-pointer hover:underline"
          href={EMAIL_ADDRESS_LINK}
        >
          {EMAIL_ADDRESS_DISPLAY}
        </a>
      </div>
    </li>
  );
};

export default EmailCard;
