import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faPause } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
function ToggleButton() {
  const [ispaused, setIspasued] = useState(false);

  const handleClick = () => {
    setIspasued(!ispaused);
  };
  return (
    <div>
      <button
        className="btn btn-outline-secondary"
        onClick={handleClick}
        style={{ width: "45px", height: "40px" }}
      >
        {ispaused ? (
          <FontAwesomeIcon icon={faCircleDot} />
        ) : (
          <FontAwesomeIcon icon={faPause} />
        )}
        {ispaused ? "" : ""}
      </button>
    </div>
  );
}
export default ToggleButton;
