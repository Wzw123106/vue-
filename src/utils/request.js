/*
 * @Author: chiLi
 * @Date: 2022-02-22 22:50:04
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 封装axios
import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
    // 设置请求地址
    baseURL:'/api',
    timeout:6000, //超时
})


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 发送请求前将参数利用qs转化
    config.data = qs.stringify(config.data)
    // 发送请求前判断本地有无cookie值，如果有就携带在请求头当中
    let token = window.localStorage.getItem('token')
    if(token){
      config.headers.Authorization = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


  
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    if(error && error.response){
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch(error.response.status){
        case 400:
          console.log('请求错误')
          break;
        case 401:
          console.log('未授权,请重新登录')
          break;
        case 403:
          console.log('拒绝访问')
          break;
        case 404:
          console.log('请求错误,未找到该资源')
          break;
        case 405:
          console.log('请求方法未允许')
          break;
        case 408:
          console.log('请求超时')
          break;
        case 500:
          console.log('服务端请求错误')
          break;   
        case 501:
            console.log('网络未实现')
          break;
        case 502:
          console.log('网络错误')
          break;
        case 503:
            console.log('服务不可用')
          break;
        case 504:
          console.log('网络超时')
           break;
        case 505:
          console.log('http版本不支持该请求')
          break;
          
      } 
    }else{
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
          console.log('服务器超时响应,请刷新')
        }
        console.log('连接服务器失败')
    }

    // 对响应错误做点什么
    // return Promise.reject(error.response.status);
  });

  export default instance