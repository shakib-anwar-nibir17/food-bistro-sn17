import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import MainButton from "../MainButton/MainButton";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const CardFood = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please Login to add your order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#BB8506",
        cancelButtonColor: "#1F2937",
        confirmButtonText: "Yes!! login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            onClick={handleAddToCart}
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
  food: PropTypes.object,
};

export default CardFood;
