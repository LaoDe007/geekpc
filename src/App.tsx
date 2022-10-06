import React from "react";

import "antd/dist/antd.min.css";
import AuthRoute from "./components/AuthRoute/index";


export default function App() {
  //权限检查，检查是否有token
  const element = AuthRoute();
  return <div className="App">{element}</div>;
}
