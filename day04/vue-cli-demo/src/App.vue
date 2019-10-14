<template>
  <div id="app">
   {{msg}}
   <h3>
     <router-link to="/home">主页</router-link>
     <router-link to="/news">新闻</router-link>
   </h3>
   <div>
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
   </div>

   <button @click="send">发送AJAX请求</button>

   <!-- 为自定义组件添加事件：修饰符.native 使自定义的组件监听原生事件 -->
   <MyButton @click.native="send"></MyButton>
  </div>
</template>

<script>
// axios不像vue-router一样是全局的
// 所以axios的使用方式1：在每个使用axios的组件中引入
// import axios from 'axios'

import MyButton from './components/MyButton.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    console.log(this.$route)
  },
  // 监听路由对象信息的变化
  watch:{
    $route:function(newValue,oldValue){
      console.log('路由发生变化，跳转到：'+newValue.path);
    }
  },
  methods:{
    send(){
      this.$http.get('https://api.github.com/users/mojombo')
      .then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err)
      });
    }
  },
  components:{
    MyButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
