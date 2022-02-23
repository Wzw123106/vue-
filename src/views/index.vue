<!--
 * @Author: chiLi
 * @Date: 2022-02-20 19:39:42
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="index">
      <button @click="as">设置本地存储</button>
      <h4>这是主页面</h4>
  </div>
</template>

<script>
// import axios from '../utils/request'
// import http from '../utils/http'
import api from '../utils/api'
export default {
    data () {
        return {
            
        }
    },
    methods: {
        sum(){

            // 获取天气
            api.postFormApi({
                    province:'四川',
                    city:'成都',
                    county:'武侯区'
            }).then((res)=>{
                console.log(res.data)
            })
            
        },
        as(){
            window.localStorage.setItem('token','123456')
        }
    },
    created () {
        this.sum()
    }
}
</script>

<style>
    #index{
        width: 100%;
        height: 100%;
        background-color: aqua;
    }
</style>