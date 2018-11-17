<template>
	<div class="proList">
		<pub-header>
			<i class="icon iconfont icon-fanhui" slot="left"></i>
			<div class="search" slot="center"><i></i><input type="text" placeholder="商务男表 全场8折起"/><span></span></div>
			<span slot="right">搜索</span>
		</pub-header>
		<img :src="info[0].src" alt="" />
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/Header.vue'
	export default {
		name:"ProList",
	  	components:{
	  		"pub-header":PubHeader
	  	},
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