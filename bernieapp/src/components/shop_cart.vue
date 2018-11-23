<template>
	<div class="shop-cart">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">购物车</h2>
		</pub-header>
		<ul class="sc-list">
			<li v-for="(item,index) in carts">
				<div class="scl-title">
					<i class="icon iconfont" :class="item.checked?'icon-gou':''" @click="check(item.shop_id)"></i>
					<p v-if="item.onoff"><span>领券</span><b></b><span @click="change(item.shop_id)">编辑</span></p>
					<p v-if="!item.onoff"><span @click="finish(item.shop_id)">完成</span></p>
				</div>
				<div class="scl-content">
					<div class="scl-img">
						<img :src="item.imgSrc" alt="" />
					</div>
					<div class="scl-info" v-if="item.onoff">
						<p>{{item.title}}</p>
						<span>&yen;<b>{{item.price}}</b>.00</span>
						<em>x{{item.shop_num}}</em>
					</div>
					<div class="scl-change" v-if="!item.onoff">
						<div class="scl-num">
							<em @click="subtract(item.shop_id)">-</em>
							<input type="text" :value="item.shop_num"/>
							<em @click="add(item.shop_id)">+</em>
						</div>
						<span @click="del(item.shop_id)">删除</span>
					</div>
				</div>
				<div class="scl-gift">
					<i class="icon iconfont icon-huodong"></i>
					<span>满{{item.freePost}}包邮，两件{{item.discountRate}}折。</span>
				</div>
			</li>
		</ul>
		<div class="sc-settlement">
			<i class="icon iconfont" :class="allchecked?'icon-gou':''" @click="allCheck()"></i>
			<h3>全选</h3>
			<div class="settlement">
				<a href="javascript:;">结算</a>
				<p>合计：<em>&yen;<b>{{totalAmount}}</b>.00</em></p>
				<span>不含运费</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue';
	
	export default {
		name:"ShopList",
	  	components:{
	  		"pub-header":PubHeader
	  	},
		data(){
			return {
				carts:[],
				allchecked:true,
				totalAmount:0
			}
		},
		created(){
			this.carts = this.shopCarts.map((item,index)=>{
				var pro = this.products.filter((item1,index1)=>{
					return item.pro_id == item1.pro_id;
				});
				return {
					userid:item.userid,
					pro_id:item.pro_id,
					shop_num:item.shop_num,
					shop_money:item.shop_money,
					title:pro[0].title,
					price:pro[0].price,
					discount:pro[0].discount,
					freePost:pro[0].freePost,
					discountNum:pro[0].discountNum,
					discountRate:pro[0].discountRate,
					imgSrc:pro[0].imgSrc,
					checked:false,
					onoff:false
				}
			});
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			},
			check(id){
				
			},
			change(id){
				
			},
			subtract(id){
				
			},
			add(id){
				
			},
			finish(id){
				
			},
			del(id){
				
			},
			allCheck(){
				
			}
		},
		computed:{
		  	...mapState(['products','shopCarts'])
		}
	}
</script>

<style lang="less">
	@import '../assets/css/shop_cart.less';
	
</style>