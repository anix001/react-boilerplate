import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../modules/auth/AuthLayout";
import PrivateRoute from "./PrivateRoute";

const MainRoute = () => {
  const [isLoggedIn] = useState<boolean>(true);
  const setDefaultPath = isLoggedIn ? "/" : "/auth";
  //   const route = useLocation().pathname;

  //   useEffect(()=>{
  //     setIsLoggedIn(isToken());
  //   },[route]);

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={!isLoggedIn ? <AuthLayout /> : <Navigate to="/" />}
      />
      <Route
        path="/*"
        element={isLoggedIn ? <PrivateRoute /> : <Navigate to="/auth" />}
      />
      <Route path="*" element={<Navigate to={setDefaultPath} />} />
    </Routes>
  );
};

export default MainRoute;
