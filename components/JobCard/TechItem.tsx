import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  icon: string;
}

const TechItem: React.FC<Props> = (props) => {
  const { name, icon } = props;
  return (
    <li className="flex items-center gap-1 text-[0.91rem]">
      <Image
        className="h-4 w-auto"
        src={`/icons/${icon}.svg`}
        alt={name}
        loading="lazy"
        width={100}
        height={100}
        loader={(src) => src.src}
      />
      {name}
    </li>
  );
};

export default TechItem;
