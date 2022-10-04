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
    url: "/posts",
    data: { mobile, code},
  });
};
