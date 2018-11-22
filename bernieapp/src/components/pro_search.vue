<template>
	<div class="pro-search">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<div slot="mid">
				<i class="icon iconfont icon-oc-search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>
				<span class="icon iconfont icon-shandiao"></span>
			</div>
			<em slot="right" class="searchTxt">搜索</em>
		</pub-header>
		<div class="ps-content">
			<div class="recent-search">
				<div class="rs-title">
					<h2>最近搜索</h2>
					<i class="icon iconfont icon-shanchu"></i>
				</div>
				<div class="re-list">
					<span v-for="(item,index) in recents" @click="checkRecents(index)">{{item}}</span>
				</div>
			</div>
			<div class="ps-want">
				<div class="psw-title">
					<h2>猜你想要</h2>
					<em><i class="icon iconfont icon-huan"></i>换一批</em>
				</div>
				<div class="psw-list">
					<span v-for="(item,index) in wants" @click="checkWants(index)">{{item}}</span>
				</div>
			</div>
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
				recents:[],
				wants:[]
			}
		},
		created(){
			this.recents = this.recentSearches.filter((item,index)=>{
				return index<8
			});
			this.wants = this.wantSearches.filter((item,index)=>{
				return index<7
			});
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			},
			checkRecents(index){
				
			},
			checkWants(index){
				
			}
		},
		computed:{
		  	...mapState(['recentSearches','wantSearches'])
		}
	}
</script>

<style lang="less">
	@import '../assets/css/pro_search.less';
	
</style>