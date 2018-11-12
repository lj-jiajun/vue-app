<template>
  <div id="app">
		<view-box>
			<tabbar solt="bottom">
				<tabbar-item>
        	<i slot="label" class="home-icon">首页</i>
	      </tabbar-item>
	      <tabbar-item>
	        <i slot="label" class="classify-icon">分类</i>
	      </tabbar-item>
	      <tabbar-item>
	        <i slot="label" class="shopcart-icon">购物车</i>
	      </tabbar-item>
	      <tabbar-item>
	        <i slot="label" class="user-icon">个人中心</i>
	      </tabbar-item>
			</tabbar>
		</view-box>
  </div>
</template>

<script>
	import "@/assets/js/commont.js"
	import {ViewBox,Tabbar,TabbarItem} from 'vux';
	
	export default {
	  name:'App',
	  data(){
	  	return {
	  		ddd:""
	  	}
	  },
	  component:{
	  	ViewBox,
	  	Tabbar,
    	TabbarItem
	  }
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,body{
		width: 100%;
		max-width: 800px;
		height: 100%;
		margin: 0 auto;
		font-size: 20px;
		overflow: hidden;
	}
	/*li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}*/
	/*i,em{
		font-style: normal;
	}
	h1,h2,h3,h4,h5,h6{
		font-weight: 400;
	}*/
	#app{
		width: 100%;
		height: 100%;
	}
	/*#app img{
		width: 100%;
	}*/
	/*.nav{
		position: absolute;
		bottom:0;
		left: 50%;
		width: 100%;
		max-width: 800px;
		transform: translateX(-50%);
		height: 4.9rem;
		background: #fff;
		border-top: 1px solid #d2d2d2;
		z-index: 10;
	}
	.nav li{
		position: relative;
		float: left;
		width: 25%;
		height: 100%;
		font-size: 1.2rem;
		color: #666;
		text-align: center;
	}
	.nav li i{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2rem;
		line-height: 2rem;
	}
	.nav li i:before{
		content: "";
		position: absolute;
		top: -2.2rem;
		left: 3.4375rem;
		width: 2.4rem;
		height: 2.4rem;
	}
	.nav li .home-icon:before{
		background: url(assets/img/home-page.png) no-repeat;
		background-size: 100%;
	}
	.nav li .classify-icon:before{
		background: url(assets/img/classify.png) no-repeat;
		background-size: 100%;
	}
	.nav li .shopcart-icon:before{
		background: url(assets/img/shop-cart.png) no-repeat;
		background-size: 100%;
	}
	.nav li .user-icon:before{
		background: url(assets/img/person-center.png) no-repeat;
		background-size: 100%;
	}
	.nav .router-link-active i,.nav .router-link-active{
		font-size: 1.2rem;
		color: #db4c1f;
	}
	.nav .router-link-active .home-icon:before{
		background: url(assets/img/home-page-on.png) no-repeat;
		background-size: 100%;
	}
	.nav .router-link-active .classify-icon:before{
		background: url(assets/img/classify-on.png) no-repeat;
		background-size: 100%;
	}
	.nav .router-link-active .shopcart-icon:before{
		background: url(assets/img/shop-cart-on.png) no-repeat;
		background-size: 100%;
	}
	.nav .router-link-active .user-icon:before{
		background: url(assets/img/person-center-on.png) no-repeat;
		background-size: 100%;
	}*/
</style>
