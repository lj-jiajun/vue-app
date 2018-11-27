<template>
	<div class="user">
		<div class="u-info">
			<pub-header>
				<i slot="left" style="color: #333;" class="icon iconfont icon-shezhi" @click="goback"></i>
				<span slot="right" style="color: #333;" class="icon iconfont icon-xiaoxi1"></span>
			</pub-header>
			<div class="u-img">
				<img src="../assets/img/user-img.png" alt="" />
			</div>
		</div>
		
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
	import PubHeader from '@/components/public/header.vue'
	export default {
		name:"Login",
	  	components:{
	  		"pub-header":PubHeader
	  	},
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

<style lang="less" scoped>
	@import '../assets/css/user.less';
</style>