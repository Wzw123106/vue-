/*
 * @Author: chiLi
 * @Date: 2022-02-20 19:38:19
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 挂载axios
import axios from 'axios'
Vue.prototype.$axios = axios 

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
