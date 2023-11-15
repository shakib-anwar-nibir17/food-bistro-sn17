import PropTypes from "prop-types";

const SectionCover = ({ heading, img, fontSize, phrase }) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="h-[750px] bg-blue-200 flex justify-center items-center"
    >
      <div className="h-[53%] w-[69%] bg-black bg-opacity-50 text-center flex justify-center items-center">
        <div className="text-white">
          <h3
            style={{ fontSize: `${fontSize}` }}
            className="uppercase font-bold"
          >
            {heading}
          </h3>
          <p className="font-medium w-3/4 mx-auto">{phrase}</p>
        </div>
      </div>
    </div>
  );
};

SectionCover.propTypes = {
  heading: PropTypes.string,
  phrase: PropTypes.string,
  img: PropTypes.string,
  fontSize: PropTypes.string,
};

export default SectionCover;
