import React from "react";
import { useRoutes } from "react-router-dom";

import pathApp from "./pages/routes";

import "antd/dist/antd.css";

type Props = {};

export default function App({}: Props) {
  const element = useRoutes(pathApp);
  return (
    <div className="App">
      {/* <Link to="/login">登录</Link>
      <Link to="/home">首页</Link> */}

      {element}
    </div>
  );
}
