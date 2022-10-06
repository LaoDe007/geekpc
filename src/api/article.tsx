// 封装和文章相关的接口
import request from "utils/request";


export const getArticles = (params:unknown) => {
    return request({
        url: '/articles',
        method: 'GET',
        params,
    }
    )
}