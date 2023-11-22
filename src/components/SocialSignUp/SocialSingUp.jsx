import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialSingUp = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
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
