import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Header from "../../../components/Header/Header";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success",
              text: `${user.name} has been made an ADMIN`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All User</title>
      </Helmet>
      <SectionTitle
        heading="MANAGE ALL USERS"
        subHeading="How many??"
      ></SectionTitle>
      <div className="bg-white w-[55%] mx-auto p-6">
        <div>
          <Header main="Total users" value={users.length}></Header>
        </div>
        {/* ______________________________table ________________ */}
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra">
            {/* head */}
            <thead className=" text-white">
              <tr>
                <th className="rounded-tl-xl py-4 bg-[#D1A054]"></th>
                <th className="py-4 bg-[#D1A054]">Name</th>
                <th className="py-4 bg-[#D1A054]">Email</th>
                <th className="py-4 bg-[#D1A054]">Role</th>
                <th className="rounded-tr-xl py-4 bg-[#D1A054]">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] "
                      >
                        <FaUsers className="text-white"></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
