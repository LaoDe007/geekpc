// 用于封装所有的localStorage的操作
const TOKEN_KRY: string = "token-key-geek-pc";
const TOKEN_RIGHT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU"

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
export const hasToken = () => !!getToken()

export const rightToken = ()=> getToken() === TOKEN_RIGHT
