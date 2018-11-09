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
//	  		arr:[],
	  		show:true
	  	}
	  },
	  methods:{
	  	enter(){
				this.$router.push('/home');
			}
	  },
	  created(){
//	  	this.arr = this.$store.state.arr;
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

<style>
	body,div,p,h1,h2,h3,h4,h5,h6,ul,li{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
		font-size: 20px;
		overflow: hidden;
	}
	li{
		list-style: none;
	}
	i,em{
		font-style: normal;
	}
	#app{
		width: 100%;
	}
	#app img{
		width: 100%;
	}
	.nav{
		position: fixed;
		bottom:0;
		left:0;
		width: 100%;
		height: 4.9rem;
		border-top: 1px solid #d2d2d2;
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
		top: -2rem;
		left: 3.4375rem;
		width: 2.5rem;
		height: 2.5rem;
		background: url(assets/img/home-page.png) no-repeat;
		background-size: 100%;
	}
	.nav .router-link-active i,.nav .router-link-active{
		font-size: 1.2rem;
		color: #db4c1f;
	}
</style>
