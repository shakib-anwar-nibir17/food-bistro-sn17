import PropTypes from "prop-types";
import { useState } from "react";

const MainButton = ({ name, mainColor, secondaryColor, tertiaryColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius: "8px",
    padding: "20px 30px",
    borderBottom: `3px solid ${mainColor}`,
    cursor: "pointer",
    color: `${mainColor}`,
    backgroundColor: isHovered ? `${secondaryColor}` : `${tertiaryColor}`,
  };

  return (
    <div className="flex justify-center mt-10 font-semibold">
      <button
        className="uppercase"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </button>
    </div>
  );
};

MainButton.propTypes = {
  name: PropTypes.string,
  mainColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  tertiaryColor: PropTypes.string,
};

export default MainButton;
