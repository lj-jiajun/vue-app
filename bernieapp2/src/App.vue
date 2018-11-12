<template>
  <div id="app">
  	<view-box body-padding-bottom="4.9rem" class="view-box">
  		<x-header :left-options="{showBack: false}" class="header">
  			<span slot="left">广州</span>
				<div slot='overwrite-title' class="search"><i></i><input type="text" placeholder="商务男表 全场8折起"/><span></span></div>
				<span slot="right"></span>
  		</x-header>
  		<div class="content">
  			content
  		</div>
  		<tabbar slot="bottom" class="nav">
  			<tabbar-item selected link="/home">
  				<span slot="label" class="home-icon">首页</span>
  			</tabbar-item>
  			<tabbar-item link="/classify">
  				<span slot="label" class="classify-icon">分类</span>
  			</tabbar-item>
  			<tabbar-item link="/shopcart">
  				<span slot="label" class="shopcart-icon">购物车</span>
  			</tabbar-item>
  			<tabbar-item link="/person">
  				<span slot="label" class="person-icon">个人中心</span>
  			</tabbar-item>
  		</tabbar>
  	</view-box>
  </div>
</template>

<script>
	import "@/assets/js/commont.js";
	import {ViewBox,XHeader,Tabbar,TabbarItem} from 'vux';
	export default {
	  name: 'App',
	  components:{
	  	ViewBox,
	  	XHeader,
	  	Tabbar,
	  	TabbarItem
	  },
	  data(){
	  	return {
//	  		tabbarTextActiveColor:"red"
	  	}
	  }
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	/*@tabbar-text-active-color:#db4c1f;*/
	html, body {
	  height: 100%;
	  width: 100%;
	  overflow-x: hidden;
	}
	#app {
	  height: 100%;
	  .view-box{
			height: 100%;
			.content{
				height: 600px;
				background: coral;
			}
			.nav{
				position: absolute;
				bottom: 0;
				left: 50%;
				width: 100%;
				max-width: 800px;
				transform: translateX(-50%);
				height: 4.9rem;
				background: #fff;
				border-top: 1px solid #d2d2d2;
				z-index: 10;
				.weui-tabbar__item{
					position: relative;
					float: left;
					width: 25%;
					height: 100%;
					color: #666;
					text-align: center;
					span{
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
						height: 2rem;
						font-size: 1.2rem;
						line-height: 2rem;
					}
					span:before{
						content: "";
						position: absolute;
						top: -2.2rem;
						left: 3.4375rem;
						width: 2.4rem;
						height: 2.4rem;
					}
					.home-icon:before{
						background: url(assets/img/home-page.png) no-repeat;
						background-size: 100%;
					}
					.classify-icon:before{
						background: url(assets/img/classify.png) no-repeat;
						background-size: 100%;
					}
					.shopcart-icon:before{
						background: url(assets/img/shop-cart.png) no-repeat;
						background-size: 100%;
					}
					.person-icon:before{
						background: url(assets/img/person-center.png) no-repeat;
						background-size: 100%;
					}
				}
				.weui-bar__item_on{
					span{
						color: #db4c1f;
					}
					.home-icon:before{
						background: url(assets/img/home-page-on.png) no-repeat;
						background-size: 100%;
					}
					.classify-icon:before{
						background: url(assets/img/classify-on.png) no-repeat;
						background-size: 100%;
					}
					.shopcart-icon:before{
						background: url(assets/img/shop-cart-on.png) no-repeat;
						background-size: 100%;
					}
					.person-icon:before{
						background: url(assets/img/person-center-on.png) no-repeat;
						background-size: 100%;
					}
				}
			}
			.header {
			  height: 4.4rem;
			  background: #f4ba19;
			  .vux-header-left {
				  left: 0;
				  top: 0;
				  width: 7rem;
				  span {
					  position: relative;
					  display: block;
					  height: 4.4rem;
					  font-size: 1.8rem;
					  line-height: 4.4rem;
					  color: #000;
					  padding-left: 2.9rem;
					}
					span:before {
					  position: absolute;
					  left: 1.1rem;
					  top: 1.2rem;
					  content: "";
					  width: 1.5rem;
					  height: 2rem;
					  background: url(assets/img/location.png) no-repeat;
					  background-size: 100% 100%;
					}
				}
				.vux-header-title-area {
				  width: 23.5rem;
				  height: 3rem;
				  padding: 0;
				  margin-left: 7rem;
				  margin-top: 0.4rem;
				  background: url(assets/img/pd-bg1.png) no-repeat;
				  background-size: 100%;
				  i {
					  position: relative;
					  float: left;
					  width: 3.7rem;
					  height: 3rem;
					}
					i:before {
					  position: absolute;
					  top: 0.5rem;
					  left: 0.7rem;
					  content: "";
					  width: 2.05rem;
					  height: 2.05rem;
					  background: url(assets/img/search.png) no-repeat;
					  background-size: 100%;
					}
					input {
					  float: left;
					  width: 16.5rem;
					  height: 3rem;
					  font-size: 1.5rem;
					  line-height: 3rem;
					  color: #999;
					  background: none;
					  border: none;
					}
					span {
					  position: relative;
					  float: left;
					}
					span:before {
					  position: absolute;
					  top: 0.5rem;
					  left: 0.7rem;
					  content: "";
					  width: 2.05rem;
					  height: 2rem;
					  background: url(assets/img/sweep.png) no-repeat;
					  background-size: 100%;
					  cursor: pointer;
					}
				}
				.vux-header-right {
					top: 0;
				  right: 0;
				  width: 6.95rem;
				  height: 4.4rem;
				  span {
					  position: relative;
					  display: block;
					}
					span:before {
					  position: absolute;
					  top: 1.2rem;
					  left: 2.3rem;
					  content: "";
					  width: 2.5rem;
					  height: 2.5rem;
					  background: url(assets/img/msg.png) no-repeat;
					  background-size: 100%;
					  cursor: pointer;
					}
				}
			}
		}
	}
</style>
