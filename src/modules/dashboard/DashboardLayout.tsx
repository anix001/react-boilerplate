import { Routes, Route } from "react-router-dom";
import { DASHBOARD_ROUTES } from "./routes/DashboardRoutes";

const DashboardLayout = () => {
  return (
    <Routes>
      {DASHBOARD_ROUTES?.map((v, key) => (
        <Route key={key} path={v.path} element={v.element} />
      ))}
    </Routes>
  );
};

export default DashboardLayout;
