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
					<a href="javascript:;" @click="showScreenings">
						<em>筛选</em>
						<i class="icon iconfont icon-shaixuan"></i>
					</a>
				</li>
			</ul>
			<ul class="pl-list">
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
			</ul>
		</div>
		<div class="pl-screening" v-if="show">
				<ul class="screen-list">
					<li>
						<h4>价格</h4>
						<p>
							<span>价格区间(元)</span>
							<input type="text" class="lowest-price" placeholder="最低价"/>
							<em>-</em>
							<input type="text" class="highest-price" placeholder="最高价"/>
						</p>
					</li>
					<li v-for="(item1,index1) in list">
						<h4>{{item1.title}}</h4>
						<div>
							<em v-for="(item,index) in item1.content" :class="item.checked?'active':''" @click="check(item)">{{item.name}}</em>
						</div>
					</li>
				</ul>
				<div class="screen-btns">
					<input type="button" class="screen-reset" @click="reset" value="重置"/>
					<input type="button" class="screen-finish" @click="finish" value="完成"/>
				</div>
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
//		  	var newArr = [];
//			newArr = this.screenings.filter((item,index)=>{
//				this.list.push(item);
//				return true;
//			});
//			this.list = this.screenings;

			this.list = this.screenings;
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
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
//				console.log(this.list)
//				console.log(this.$store.state.screenings)
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
	@import '../assets/css/pro_list.less';
</style>