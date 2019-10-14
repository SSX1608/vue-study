import Vue from 'vue'

// 引入的element-ui的js文件
import ElementUI from 'element-ui'
// 样式文件需要单独引入
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
