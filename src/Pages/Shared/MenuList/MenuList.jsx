import MainButton from "../../../components/MainButton/MainButton";
import MenuCard from "../MenuCard/MenuCard";
import PropTypes from "prop-types";
import SectionCover from "../SectionCover/SectionCover";
import { Link } from "react-router-dom";

const MenuList = ({ items, title, img, phrase }) => {
  return (
    <section className="mb-20">
      {title && (
        <SectionCover
          heading={title}
          img={img}
          fontSize="40px"
          phrase={phrase}
        ></SectionCover>
      )}
      <div className="grid md:grid-cols-2 gap-4 px-4 mt-10">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="">
        <Link to={`/shop/${title}`}>
          <MainButton
            name={"ORDER YOUR FAVORITE FOOD"}
            mainColor={"#1F2937"}
            secondaryColor={"#D99904"}
            tertiaryColor={"white"}
          ></MainButton>
        </Link>
      </div>
    </section>
  );
};

MenuList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  phrase: PropTypes.string,
  img: PropTypes.string,
};

export default MenuList;
