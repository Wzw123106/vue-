/*
 * @Author: chiLi
 * @Date: 2021-03-25 13:56:26
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 服务器代理配置
module.exports = {
    // 设置打包路径
    publicPath:'./',
    // 服务器代理配置
    devServer:{
        proxy:{
            '/api':{
                // Api 服务器代理地址
                target:'https://wis.qq.com',
                // 设置是否跨域
                changeOrigin:true,
                // https协议的情况下为true
                secure: false,
                // 重写路径
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
}