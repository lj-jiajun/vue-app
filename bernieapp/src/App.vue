<template>
  <div id="app">
  	<img src="@/assets/img/start.jpg" alt="" @click="enter" v-show="show"/>
	  <ul class="nav" v-show="!show">
	  	<router-link to="/home" tag="li" key="1">
	  		<i class="home-icon">首页</i>
	  	</router-link>
	  	<router-link to="/classify" tag="li" key="2">
	  		<i class="classify-icon">分类</i>
	  	</router-link>
	  	<router-link to="/shopcart" tag="li" key="3">
	  		<i class="shopcart-icon">购物车</i>
	  	</router-link>
	  	<router-link to="/user" tag="li" key="4">
	  		<i class="user-icon">个人中心</i>
	  	</router-link>
		</ul>
    <router-view/>
  </div>
</template>

<script>
	import "@/assets/js/commont.js"
	
	export default {
	  name: 'App',
	  data(){
	  	return {
	  		show:true
	  	}
	  },
	  methods:{
	  	enter(){
				this.$router.push('/home');
			}
	  },
	  created(){
	  	if(this.$route.path == '/'){
	  		this.show = true;
	  	}else{
	  		this.show = false;
	  	}
	  },
	  watch:{
	  	$route:{
	  		handler:function(){
	  			if(this.$route.path == '/'){
	  					this.show = true;
		  		}else{
		  			this.show = false;
		  		}
	  		},
	  		deep:true
	  	}
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
		font-family: 'PingFang';
		font-size: 20px;
		overflow: hidden;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	i,em{
		font-style: normal;
	}
	h1,h2,h3,h4,h5,h6{
		font-weight: 400;
	}
	input{
		border: none;
		outline: none;
	}
	#app{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 4.9rem;
	}
	/*#app img{
		width: 100%;
	}*/
	.nav{
		position: fixed;
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
	}
</style>
