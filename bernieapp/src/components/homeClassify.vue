<template>
	<div class="classifyList">
		<ul>
			<router-link v-for="(item,index) in classifylist" :to="item.path" tag="li" :key="index">
				<img :src="item.src" alt="" />
				<p>{{item.title}}</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		name:"HomeClassify",
		data(){
			return {
				classifylist:{}
			}
		},
		created(){
		  	this.classifylist = this.classifies;
		  	console.log(this.classifylist)
		},
		computed:{
		  	...mapState(['classifies'])
		}
	}
</script>

<style scoped>
	.classifyList{
		width: 100%;
		height: auto;
		padding-bottom: 18px;
		background: #f8f6f6;
		overflow: hidden;
	}
	.classifyList ul{
		width: 34rem;
		height: auto;
		padding: 0 1.75rem;
		background: #fff;
		overflow: hidden;
	}
	.classifyList ul li{
		float: left;
		width: 8.5rem;
		margin: 1rem 0 0.5rem;
		font-size: 1.2rem;
		color: #322e30;
		text-align: center;
	}
	.classifyList ul li img{
		/*display: block;*/
		width: 4.4rem !important;
		height: 4.4rem;
		vertical-align: text-top;
	}
	.classifyList ul li p{
		line-height: 2.7rem;
	}
</style>