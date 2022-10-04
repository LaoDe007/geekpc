// 用于封装所有的localStorage的操作
const TOKEN_KRY: string = "geek-pc-ts";

/**
 * 保存token
 * @param {string} token
 */
export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KRY, token);
};

/**
 * 获取token
 * @returns token
 */
export const getToken = () => localStorage.getItem(TOKEN_KRY);

/**
 * 移除token
 * @returns 
 */
export const removeToken = () => localStorage.removeItem(TOKEN_KRY);

/**
 * 判断是否有token
 * @returns Boolean
 */
export const hasToken = ()=> !!getToken()

