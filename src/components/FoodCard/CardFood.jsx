import MainButton from "../MainButton/MainButton";
import PropTypes from "prop-types";

const CardFood = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className=" bg-[#F3F3F3]">
      <figure className="relative">
        <img className="w-full h-[300px]" src={image} alt="Shoes" />
        <p className="text-white bg-black absolute right-0 top-0 mr-4 mt-4 px-2">
          {price}
        </p>
      </figure>
      <div className="text-center space-y-4 mt-5 py-7">
        <h2 className="text-center text-2xl font-bold">{name}</h2>
        <p className="w-3/4 h-[75px] mx-auto">{recipe}</p>
        <div className="card-actions justify-center">
          <MainButton
            name="add to cart"
            mainColor="#BB8506"
            secondaryColor="#1F2937"
            tertiaryColor="#E8E8E8"
          ></MainButton>
        </div>
      </div>
    </div>
  );
};

CardFood.propTypes = {
  item: PropTypes.object,
};

export default CardFood;
