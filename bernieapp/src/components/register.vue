<template>
	<div class="proList">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<div slot="mid" class="search">
				<i class="icon iconfont icon-oc-search" @click="search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>
			</div>
			<em slot="right" class="searchTxt">搜索</em>
		</pub-header>
		<div class="pl-content">
			<!--<ul class="pl-list">
				<router-link v-for="(item,index) in products" :to="'/prodetails/'+item.pro_id" :key="index" tag="li">
					<div class="pl-img">
						<img :src="item.imgSrc" alt="" />
					</div>
					<div class="pl-content">
						<h3>{{item.title}}</h3>
						<p><em>{{item.discount}}</em></p>
						<div>
							<span>￥{{item.price}}</span>
							<b>月销{{item.sales}}笔</b>
							<i class="icon iconfont icon-gouwuchekong"></i>
						</div>
					</div>
				</router-link>
			</ul>-->
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
				list:[],
				show:false
			}
		},
		created(){
			this.list = this.screenings;
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			},
			search(){
				this.$router.push("/prosearch");
			},
			showScreenings(){
				this.show = true;
			},
			check(item){
				item.checked = !item.checked;
			},
			reset(){
				this.list.map((item,index)=>{
					item.content.map((item1,index1)=>{
						item1.checked = false;
					});
				});
			},
			finish(){
				this.show = false;
			}
		},
		computed:{
		  	...mapState(['classifies','products','screenings'])
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/css/pro_categories.less';
</style>