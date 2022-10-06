import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ConfigProvider } from "antd";
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={locale}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
