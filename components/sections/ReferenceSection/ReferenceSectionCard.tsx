import React from "react";
import { ReferenceProps } from "./ReferenceSection";
import "./style-card.css";

const ReferenceSectionCard: React.FC<ReferenceProps> = (props) => {
  const { name, picture, position, mobile, email, media, description } = props;
  return (
    <article className="reference-card">
      <img
        className="reference-image"
        src={`/references/${picture}`}
        alt={name}
        loading="lazy"
        height="64px"
        width="64px"
      />

      <div className="reference-data">
        <h1 className="reference-name">{name}</h1>
        {/* <p className="reference-description">{description}</p> */}
        <ul className="reference-description">
          <li>
            <span className="label">Position:</span>{" "}
            <span className="value">{position || "N/A"}</span>
          </li>
          <li>
            <span className="label">Mobile:</span>{" "}
            <span className="value">{mobile || "N/A"}</span>
          </li>
          <li>
            <span className="label">Email:</span>{" "}
            <span className="value">
              {email && (
                <a href={`mailto:${email}`} className="">{email}</a>
              )}
              {!email && "N/A"}  
            </span>
          </li>
          <li>
            <span className="label">Media:</span>{" "}
            <span className="value">
              {media && (
                <a href={media} className="font-bold underline">LinkedIn</a>
              )}
              {!media && "N/A"}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ReferenceSectionCard;
