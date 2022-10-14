import { Routes, Route } from "react-router-dom";
import { AUTH_ROUTES } from "./routes/AuthRoutes";

const AuthLayout = () => {
  return (
    <Routes>
      {AUTH_ROUTES?.map((v, key) => (
        <Route key={key} path={v.path} element={v.element} />
      ))}
    </Routes>
  );
};

export default AuthLayout;
