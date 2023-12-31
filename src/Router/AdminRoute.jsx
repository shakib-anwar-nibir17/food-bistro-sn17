import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center">
        <div>
          <progress className="progress w-56 mt-96"></progress>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
