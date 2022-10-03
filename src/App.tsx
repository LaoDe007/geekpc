import React from "react";
import { useRoutes, Link } from "react-router-dom";

import routes from "./pages/routes";

type Props = {};

export default function App({}: Props) {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <Link to="/login">登录</Link>
      <Link to="/home">主页</Link>

      {element}
    </div>
  );
}
