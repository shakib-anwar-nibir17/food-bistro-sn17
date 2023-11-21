import PropTypes from "prop-types";

const Header = ({ main, value }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold uppercase">
        {main}: <span>{value}</span>
      </h2>
    </div>
  );
};

Header.propTypes = {
  main: PropTypes.string,
  value: PropTypes.string,
};

export default Header;
