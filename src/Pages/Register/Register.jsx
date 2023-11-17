import { Link, useNavigate } from "react-router-dom";
import logInImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate("/");
    });
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 mx-auto mr-0"
          >
            <h2 className="text-4xl font-bold text-center mb-10">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600 mt-4">First name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 mt-4">First name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                placeholder="password"
                className="input input-bordered "
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-4">First name is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 mt-4">
                  Invalid Format. Password must contain one uppercase, one
                  lowercase, one special character and single digit
                </p>
              )}
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
