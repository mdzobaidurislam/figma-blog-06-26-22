import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
// import useGlobalContexts from "../../Context/GlobalContext";
import auth from "../Firebase/Firebase.init";
import SpinnerLoading from "../Share/SpinnerLoading";

const RequireAuth = ({ children }) => {
  // const { setmodalshow } = useGlobalContexts();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <SpinnerLoading />;
  }
  if (!user) {
    // setmodalshow(true);
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
