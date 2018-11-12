<template>
	<div>{{info[0].content}}</div>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
	  	name: 'User',
		data(){
		  	return {
		  		info:{}
		  	}
		},
		created(){
		  	this.info = this.$store.state.arr.filter((item,index)=>{
		  		return item.path==this.$route.path
		  	});
		},
		computed:{
		  	...mapState(['arr'])
		}
	}
</script>

<style>
</style>