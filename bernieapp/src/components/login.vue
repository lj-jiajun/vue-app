<template>
	<div class="login" :style="bg">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">登录</h2>
		</pub-header>
		<div class="login-content">
			<div class="user-info">
				<div class="user-img">
					<img src="../assets/img/user.jpg.png" alt="" />
				</div>
				<p>Hi，创鑫，欢迎回来</p>
			</div>
			<div class="login-info">
				<p><label>账号：</label><input type="text" id="username"/></p>
				<p><label>密码：</label><input type="password" id="password"/></p>
			</div>
			<div class="login-btn">
				<input type="button" value="立即登录"/>
			</div>
			<div class="login-others">
				<router-link to="/register" tag="span">
			  		立即注册
			 	</router-link>
				<em>忘记密码</em>
			</div>
			<div class="nologin">
				<span>游客进入</span>
			</div>
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