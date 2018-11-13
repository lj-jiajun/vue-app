<template>
	<div>
		<home-header></home-header>
		<home-banner></home-banner>
		<home-classify></home-classify>
		<home-news></home-news>
	</div>
</template>

<script>
	import HomeHeader from '@/components/homeHeader.vue'
	import HomeBanner from '@/components/homeBanner.vue'
	import HomeClassify from '@/components/homeClassify.vue'
	import HomeNews from '@/components/homeNews.vue'
	export default {
	  	name: 'Home',
	  	components:{
	  		"home-header":HomeHeader,
	  		"home-banner":HomeBanner,
	  		"home-classify":HomeClassify,
	  		"home-news":HomeNews
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