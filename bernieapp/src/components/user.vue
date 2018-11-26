<template>
	<div>
		{{info[0].content}}
		<router-link to="/login" tag="a" key="1">
	  		登录
	  	</router-link>
	  	<router-link to="/register" tag="a" key="2">
	  		注册
	  	</router-link>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
	  	name: 'User',
		data(){
		  	return {
		  		info:{}
		  	}
		},
		created(){
		  	this.info = this.$store.state.arr.filter((item,index)=>{
		  		return item.path==this.$route.path
		  	});
		},
		computed:{
		  	...mapState(['arr'])
		}
	}
</script>

<style>
</style>