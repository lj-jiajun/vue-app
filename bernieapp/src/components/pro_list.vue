<template>
	<div class="proList">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<!--<div slot="left">
				<i class="icon iconfont icon-weizhifuben"></i>
				<span>广州</span>
			</div>-->
			<div slot="mid" class="search">
				<i class="icon iconfont icon-oc-search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>
				<!--<span class="icon iconfont icon-552dc065f0478"></span>-->
			</div>
			<!--<i slot="right" class="icon iconfont icon-xiaoxi"></i>-->
			<em slot="right" class="searchTxt">搜索</em>
		</pub-header>
		<div class="pl-content">
			<ul class="pl-tab">
				<li class="active">
					<a href="javascript:;">
						<span>综合</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<span>销量</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<span>价格</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<em>筛选</em>
						<i class="icon iconfont icon-shaixuan"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue'
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
		methods:{
			goback(ev){
				this.$router.go(-1);
//				console.log(this.$router)
			}
		},
		computed:{
		  	...mapState(['classifies'])
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/pro_list.less';
</style>