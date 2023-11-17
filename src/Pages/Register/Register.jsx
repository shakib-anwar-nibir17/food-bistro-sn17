import { Link } from "react-router-dom";
import logInImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url("${background}")` }}
      className="min-h-screen flex justify-center items-center"
    >
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      ;
      <div
        style={{ backgroundImage: `url("${background}")` }}
        className="flex flex-row-reverse justify-center items-center w-[85%] min-h-[80vh] shadow-2xl"
      >
        <div>
          <img src={logInImage} alt="" />
        </div>
        <div className="w-1/2 px-8n ">
          <form className="w-3/4 mx-auto mr-0">
            <h2 className="text-4xl font-bold text-center mb-10">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#D1A054B2] text-white"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-[#D1A054] mt-4 text-center ">
              Already Have an Account?
              <Link to="/login">
                <span className="font-bold ml-2">Log in Here</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
