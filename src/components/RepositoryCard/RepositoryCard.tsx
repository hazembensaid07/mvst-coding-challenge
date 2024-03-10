import React from "react";
import "./RepositoryCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button/Button";
import { RepositorySchema } from "../../Schemas/RepositorySchema";
/**
 * The RepositoryCard component renders a card-like UI element displaying information about a GitHub repository.
 * It includes the repository's title, visibility status, number of stars and forks, last update date, and main technology used.
 * It also provides a button to star the repository.
 *
 * @param {RepositorySchema} props - The props passed to the component with type RepositorySchema and attributes destructured .
 * @returns {React.ReactElement} The TSX code for rendering the repository card.
 */
const RepositoryCard: React.FC<RepositorySchema> = ({
  title,
  visibility,
  stars,
  forks,
  lastUpdate,
  technology,
}) => {
  return (
    <div className="repo-card">
      <div>
        <div className="repo-description">
          {/* Repository icon and title */}
          <a className="repo-title">{title}</a>
          <p className="pill">{visibility}</p>
        </div>
        <div className="popularity">
          <p className="technology-used">{technology}</p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            {stars}
          </div>
          <div className="fork">
            <FontAwesomeIcon icon={faCodeBranch} />
            {forks}
          </div>
          <p className="last-update">{lastUpdate}</p>
        </div>
      </div>
      <Button
        text="Star"
        icon={faStar}
        onClick={(): void => console.log("Starred")}
        className="github-star-button"
      />
    </div>
  );
};

export default RepositoryCard;
