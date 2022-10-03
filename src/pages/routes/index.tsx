import { Navigate } from "react-router-dom";

import Layout from "../Layout";
import Login from "../Login";

const path = [
  {
    path: "/home",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
];
export default path;
