import React from "react";

const Main: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px]">
      {children}
    </div>
  );
};

export default Main;
