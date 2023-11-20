import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center">
        <div>
          <progress className="progress w-56 mt-96"></progress>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
