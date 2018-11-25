<template>
	<ul class="menu">
		<router-link to="/home" tag="li">首页</router-link>
		<router-link to="/home" tag="li">首页</router-link>
		<router-link to="/home" tag="li">首页</router-link>
	</ul>
</template>

<script>
	export default {
	  	name: 'Menu',
	  	data(){
		  	return {
		  		info:{}
		  	}
		},
		created(){
		  	this.info = this.$store.state.arr.filter((item,index)=>{
		  		return item.path==this.$route.path
		  	});
		}
	}
</script>

<style>
</style>