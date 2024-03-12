import React from "react";

interface Props {
  name: string;
  icon: string;
}

const TechItem: React.FC<Props> = (props) => {
  const { name, icon } = props;
  return (
    <li className="flex items-center gap-1 text-[0.91rem]">
      <img
        className="h-4 w-auto"
        src={`/icons/${icon}.svg`}
        alt={name}
        loading="lazy"
      />
      {name}
    </li>
  );
};

export default TechItem;
