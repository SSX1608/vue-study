<template>
	<div id="itany">
		<h1>welcome to itany</h1>
		<h2 @click="change">{{name}}</h2>

		<User></User>
	</div>
</template>

<script>
	import User from './components/user.vue'
	// console.log(111)
	// 存储数据需要导出
	export default {
		data(){
			return {
				name:'tom'
			}
		},
		methods:{
			change(){
				this.name='汤姆';
			}
		},
		components:{
			User
		}
	}
</script>

<style>
	body{
		background-color: #ccc;
	}
</style>		