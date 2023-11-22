import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialSingUp = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const newUser = result.user;
        const userInfo = {
          email: newUser.email,
          name: newUser.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="space-x-4">
      <button className="btn btn-circle btn-outline">
        <FaFacebook className="text-2xl"></FaFacebook>
      </button>
      <button className="btn btn-circle btn-outline">
        <FaGoogle onClick={handleGoogleSignIn} className="text-2xl"></FaGoogle>
      </button>
      <button className="btn btn-circle btn-outline">
        <FaGithub className="text-2xl"></FaGithub>
      </button>
    </div>
  );
};

export default SocialSingUp;
