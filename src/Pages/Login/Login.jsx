import logInImage from "../../assets/others/authentication2.png";
import background from "../../assets/others/authentication.png";
import { Helmet } from "react-helmet-async";
import "./login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const captchaValidate = () => {
    const valueCaptcha = captchaRef.current.value;
    console.log(valueCaptcha);
    if (validateCaptcha(valueCaptcha) == true) {
      setDisabled(false);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url("${background}")` }}
      className="min-h-screen flex justify-center items-center"
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      ;
      <div
        style={{ backgroundImage: `url("${background}")` }}
        className="flex justify-center items-center w-[85%] min-h-[80vh] shadow-2xl"
      >
        <div>
          <img src={logInImage} alt="" />
        </div>
        <div className="w-1/2">
          <form onSubmit={handleLogIn} className="w-3/4">
            <h2 className="text-4xl font-bold text-center mb-10">Login</h2>
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="input captcha"
                ref={captchaRef}
                // onChange={captchaValidate}
                className="input input-bordered "
                required
              />
              <button
                onClick={captchaValidate}
                className="btn btn-xs btn-error btn-outline mt-4"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn bg-[#D1A054B2] text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="w-3/4">
            <p className="text-[#D1A054] mt-4 text-center ">
              New here?
              <Link to="/register">
                <span className="font-bold ml-2">Create a New Account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
