/*
 * @Author: chiLi
 * @Date: 2022-02-23 21:27:17
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 导入封装好的axios实例
import request from './request'
const http = {
        /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
         get(url,params){
            const config = {
                method: 'get',
                url:url
            }
            if(params) config.params = params
            return request(config)
        },
        post(url,params){
            const config = {
                method: 'post',
                url:url
            }
            if(params) config.data = params
            return request(config)
        },
        put(url,params){
            const config = {
                method: 'put',
                url:url
            }
            if(params) config.params = params
            return request(config)
        },
        delete(url,params){
            const config = {
                method: 'delete',
                url:url
            }
            if(params) config.params = params
            return request(config)
        }
}

// 导出
export default http