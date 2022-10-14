import Signup from "../modules/auth/pages/Signup";
import DashboardLayout from "../modules/dashboard/DashboardLayout";

export const RoleLayoutHandler = ({ role }: { role: any }) => {
  switch (role.toString()) {
    case "1":
      return <DashboardLayout />;
    default:
      return <Signup />;
  }
};
