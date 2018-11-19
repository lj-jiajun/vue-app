<template>
	<div>
		<pub-banner>
			
		</pub-banner>
	</div>
</template>

<script>
	
	import PubHeader from '@/components/public/header.vue'
	
	export default {
	  	name: 'Classify',
	  	components:{
	  		"pub-banner":PubHeader
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