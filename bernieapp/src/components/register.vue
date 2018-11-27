<template>
	<div class="register" :style="bg">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">注册页</h2>
		</pub-header>
		<div class="register-content">
			<div class="register-info">
				<p><label>手机号码：</label><input type="text" id="userphone"/></p>
				<p><label>验证码：</label><input type="text" id="usercode"/><span>发送验证码</span></p>
				<p><label>用户名：</label><input type="text" id="username"/></p>
				<p><label>密码：</label><input type="password" id="password"/></p>
			</div>
			<div class="register-check">
				<i></i><span>已同意<em>《伯尼用户协议和隐私条款》</em></span>
			</div>
			<div class="register-btn">
				<input type="button" value="立即注册"/>
			</div>
		</div>
	</div>
</template>

<script>
	import bg from '@/assets/img/bg.png'
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue'
	export default {
		name:"Register",
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
	@import '../assets/css/register.less';
</style>