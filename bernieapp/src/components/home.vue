<template>
	<div>
		<home-header></home-header>
		<home-banner></home-banner>
	</div>
</template>

<script>
	
	import HomeHeader from '@/components/homeHeader.vue'
	import HomeBanner from '@/components/homeBanner.vue'
	
	export default {
	  	name: 'Home',
	  	components:{
	  		"home-header":HomeHeader,
	  		"home-banner":HomeBanner
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
		}
	}
</script>

<style>
</style>