import { FaEdit, FaTrashAlt } from "react-icons/fa";
import HelmetTitle from "../../../components/Helmet/HelmetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Header from "../../../components/Header/Header";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    console.log(item._id);
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <HelmetTitle title="Manage Items"></HelmetTitle>
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up!"
      ></SectionTitle>
      <div className="bg-white w-[70%] mx-auto p-6">
        <div>
          <Header main="Total Items" value={menu.length}></Header>
        </div>
        {/* ______________________________table ________________ */}
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra">
            {/* head */}
            <thead className=" text-white">
              <tr>
                <th className="rounded-tl-xl py-4 bg-[#D1A054]"></th>
                <th className="py-4 bg-[#D1A054]">Item Image</th>
                <th className="py-4 bg-[#D1A054]">Item Name</th>
                <th className="py-4 bg-[#D1A054]">Price</th>
                <th className="py-4 bg-[#D1A054]">Action</th>
                <th className="rounded-tr-xl py-4 bg-[#D1A054]">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-[75px] h-[75px]"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>

                  <td>
                    <button className="btn bg-[#D1A054] ">
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn bg-[#B91C1C] "
                    >
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
