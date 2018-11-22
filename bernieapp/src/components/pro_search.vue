<template>
	<div class="pro-search">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<div slot="mid">
				<i class="icon iconfont icon-oc-search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>
				<span class="icon iconfont icon-552dc065f0478"></span>
			</div>
			<em slot="right" class="searchTxt">搜索</em>
		</pub-header>
		<div class="ps-content">
			
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue';
	
	export default {
		name:"ProSearch",
	  	components:{
	  		"pub-header":PubHeader
	  	},
		data(){
			return {
				info:{}
			}
		},
		created(){
		  	var obj = this.products.filter((item,index)=>{
				return item.pro_id == this.$route.params.id;
			});
			this.info = obj[0];
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			}
		},
		computed:{
		  	...mapState(['products'])
		}
	}
</script>

<style lang="less">
	@import '../assets/css/pro_search.less';
	
</style>