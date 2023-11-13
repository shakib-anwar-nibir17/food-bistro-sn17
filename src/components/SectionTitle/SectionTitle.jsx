import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10 mt-20">
      <p className="text-[#D99904] text-xl mb-4">--- {subHeading} ---</p>
      <h2 className="border-y-2 w-1/4 mx-auto py-5 text-3xl">{heading}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
