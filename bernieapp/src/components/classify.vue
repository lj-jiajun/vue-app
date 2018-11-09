<template>
	<div>{{info[0].content}}</div>
</template>

<script>
	export default {
	  	name: 'Classify',
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