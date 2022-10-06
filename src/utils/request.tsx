import axios from "axios";
import { getToken, hasToken, removeToken } from "./storageToken";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

// 创建axios实例
const instance = axios.create({
  baseURL: "http://localhost:3000/api1",
  timeout: 2000,
});

// 配置拦截器
// Add a request interceptor
instance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    if (hasToken()) {
      config.headers.Authorization = `Bearer${getToken()}`;
    }

    // console.log("config:", config);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("interceptors.response:response", response);
    

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    //报错时 1.删除token
    removeToken();
    // 2. 给提示消息
    message.warn("登录错误");
    // 3.跳转到登录页
    const navigate = useNavigate();
    
    
    navigate("/login");
    return Promise.reject(error);
  }
);
export default instance;
