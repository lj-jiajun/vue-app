<template>
	<div>
		<!--<home-banner></home-banner>-->
	</div>
</template>

<script>
	
	import HomeBanner from '@/components/home/homeBanner.vue'
	
	export default {
	  	name: 'Classify',
	  	components:{
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