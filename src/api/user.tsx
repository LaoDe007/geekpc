import request from "utils/request";

/**
 * 登录请求，用于用户登录
 * @param mobile 手机号
 * @param code 验证码
 * @returns axios 实例
 */
export const login = (mobile: number, code: number) => {
  return request({
    method: "GET",
    url: "/posts/2",
    data: { mobile, code},
  });
};

/**
 * 
 * @returns 获取用户信息
 */

export const getUserProfile = () => {
  return request({
    method: "GET",
    url: "/user/1"
  });
};

export const getStatusError = () => {
  return request({
    method: "GET",
    url: "/user/12"
  });
};
