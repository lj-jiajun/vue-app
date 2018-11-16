<template>
	<div class="proList">
		<img :src="info[0].src" alt="" />
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		name:"ProList",
		data(){
			return {
				info:[]
			}
		},
		created(){
		  	this.info = this.classifies.filter((item,index)=>{
		  		return item.path==this.$route.path
		  	});
		  	if(this.info.length==0){
		  		this.info.push(this.classifies[0]);
		  	}
//		  	console.log(this.info[0].content);
		},
		computed:{
		  	...mapState(['classifies'])
		}
	}
</script>

<style scoped>
	.proList{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.proList ul{
		width: 34rem;
		height: auto;
		overflow: hidden;
	}
	.proList ul{
		
	}
</style>