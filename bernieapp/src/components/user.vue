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
			<p>小伙子</p>
			<ul class="goods-type">
				<li>
					<em>0</em>
					<span>收藏</span>
				</li>
				<li>
					<em>0</em>
					<span>足迹</span>
				</li>
				<li>
					<em>0</em>
					<span>咨询</span>
				</li>
				<li>
					<em>0</em>
					<span>收藏</span>
				</li>
			</ul>
		</div>
		<div class="u-other">
			<div class="my-order">
				<p><span>我的订单</span><em>查看全部订单 &gt;</em></p>
				<ul class="order-type">
					<li>
						<i class="icon iconfont icon-daifukuan"></i>
						<span>待付款</span>
					</li>
					<li>
						<i class="icon iconfont icon-daifuhuo"></i>
						<span>待发货</span>
					</li>
					<li>
						<i class="icon iconfont icon-daishouhuo"></i>
						<span>待收货</span>
					</li>
					<li>
						<i class="icon iconfont icon-daipingjia"></i>
						<span>待评价</span>
					</li>
					<li>
						<i class="icon iconfont icon-tuihuanhuo"></i>
						<span>退换货</span>
					</li>
				</ul>
			</div>
			<ul class="other-list">
				<li>
					<span>购买记录</span>
					<i class="icon iconfont icon-right"></i>
				</li>
				<li>
					<span>收货地址</span>
					<i class="icon iconfont icon-right"></i>
				</li>
				<li>
					<span>个人资料</span>
					<i class="icon iconfont icon-right"></i>
				</li>
			</ul>
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