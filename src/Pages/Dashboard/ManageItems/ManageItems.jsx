import { FaEdit, FaTrashAlt } from "react-icons/fa";
import HelmetTitle from "../../../components/Helmet/HelmetTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Header from "../../../components/Header/Header";
import useMenu from "../../../Hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();
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
                    <button className="btn bg-[#B91C1C] ">
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
