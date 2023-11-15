import PropTypes from "prop-types";

const MenuCard = ({ item }) => {
  const { name, recipe, price, image } = item;
  return (
    <div className="flex space-x-4">
      <div className="w-[120px] h-[104px]">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h1 className="uppercase">{name} ----------------------------</h1>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object,
};

export default MenuCard;
