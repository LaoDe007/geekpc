import { Navigate } from "react-router-dom";
import Layout from "../Layout";
import Login from "../Login";

import Home from "../Home";
import ArticlePublish from "../ArticlePublish";
import ArticleList from "../ArticleList";

//APP组件的路由设置
const pathApp = [[
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  }],
  [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "list",
        element: <ArticleList />,
      },
      {
        path: "publish",
        element: <ArticlePublish />,
      },
    ],
  },]
  
  
];
export default pathApp;
