import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

// axios使用方式2：在main.js中全局引入并添加到Vue原型上
import axios from 'axios'

// 使用VueRouter(它是个全局的插件，入口文件引入之后可以在所以的组件中使用)
Vue.use(VueRouter)

// 创建路由实例
const router=new VueRouter(routerConfig);

// 添加到Vue的原型上(起个别名$http)
Vue.prototype.$http=axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
