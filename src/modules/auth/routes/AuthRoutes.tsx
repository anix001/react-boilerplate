import Login from "../pages/Login";
import QAPage from "../pages/QAPage";
import Signup from "../pages/Signup";
import TermsAndCondition from "../pages/TermsAndCondition";

export const AUTH_ROUTES = [
  { path: "/", element: <Login /> },
  { path: "/qapage", element: <QAPage /> },
  { path: "/terms", element: <TermsAndCondition /> },
  { path: "/signup", element: <Signup /> },
];
