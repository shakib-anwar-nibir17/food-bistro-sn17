import { Helmet } from "react-helmet-async";
import Header from "../../../components/Header/Header";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserCart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        refetch();
      }
    });
  };
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
            <thead className=" text-white">
              <tr>
                <th className="rounded-tl-xl py-4 bg-[#D1A054]"></th>
                <th className="py-4 bg-[#D1A054]">ITEM IMAGE</th>
                <th className="py-4 bg-[#D1A054]">ITEM NAME</th>
                <th className="py-4 bg-[#D1A054]">PRICE</th>
                <th className="rounded-tr-xl py-4 bg-[#D1A054]">Action</th>
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
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-[#B91C1C] "
                    >
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
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
