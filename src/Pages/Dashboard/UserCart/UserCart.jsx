import { Helmet } from "react-helmet-async";
import Header from "../../../components/Header/Header";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";

const UserCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionTitle>
      <div className="bg-white w-[62%] mx-auto p-6">
        <div className="flex justify-between">
          <Header main="Total orders" value={cart.length}></Header>
          <Header main="Total Price" value={`$${totalPrice}`}></Header>
          <button className="btn btn-success">Pay</button>
        </div>
        {/* ______________________________table ________________ */}
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
