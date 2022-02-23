/*
 * @Author: chiLi
 * @Date: 2022-02-23 21:50:12
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 引入刚才封装的http请求的各种方法
import http from '../utils/http'

// api接口就是将各个接口的请求放到同一目录当中，方便同一管理

export default{
    // 天气预报接口
    // paramObj 代表传递的参数
    postFormApi(paramObj){
        return http.get('/weather/common?source=xw&weather_type=forecast_1h|forecast_24h|index|alarm|limit|tips',paramObj)
    }
}