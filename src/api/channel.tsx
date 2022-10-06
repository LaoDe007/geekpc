// 封装和频道相关的接口

import request from "utils/request";

export function getChannels() {
    return request.get('/channels') 
}