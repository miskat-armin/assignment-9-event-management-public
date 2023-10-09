import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.pathname || "/";

  console.log(from);
  
  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    if (user) {
      return children;
    } else return <Navigate to={"/signin"} replace={true} state={{from: from}} />;
  }
};

export default PrivateRoute;
