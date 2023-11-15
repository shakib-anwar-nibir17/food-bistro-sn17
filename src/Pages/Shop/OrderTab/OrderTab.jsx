import PropTypes from "prop-types";
import CardFood from "../../../components/FoodCard/CardFood";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 px-10 gap-4 mt-16 mb-20">
      {items.map((item) => (
        <CardFood key={item._id} item={item}></CardFood>
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
