import React from "react";

import { Card } from "antd";


import './index.css'

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="login">
      <Card className="login-container">
        <div className="login-logo">登录</div>
      </Card>
    </div>
  );
}
