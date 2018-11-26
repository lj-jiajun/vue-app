<template>
	<div class="login" :style="bg">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">登录</h2>
		</pub-header>
		<div class="login-content">
			
		</div>
	</div>
</template>

<script>
	import bg from '@/assets/img/bg.png'
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue'
	export default {
		name:"Login",
	  	components:{
	  		"pub-header":PubHeader
	  	},
		data(){
			return {
				list:[],
				show:false,
				bg:'background:url('+bg+');background-size: 100% 100%;'
			}
		},
		created(){
			this.list = this.screenings;
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			}
		},
		computed:{
		  	...mapState(['classifies'])
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/login.less';
</style>