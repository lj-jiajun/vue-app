<template>
	<div class="order">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">确认订单</h2>
		</pub-header>
		<div class="sc-content">
			
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import PubHeader from '@/components/public/header.vue';
	
	export default {
		name:"Order",
	  	components:{
	  		"pub-header":PubHeader
	  	},
		data(){
			return {
				carts:[],
				allchecked:false,
				totalAmount:0
			}
		},
		created(){
			this.carts = this.shopCarts.map((item,index)=>{
				var pro = this.products.filter((item1,index1)=>{
					return item.pro_id == item1.pro_id;
				});
				return {
					shop_id:item.shop_id,
					user_id:item.user_id,
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
					onoff:true
				}
			}).filter((item2,index2)=>{
				return item2.user_id==this.userinfo.user_id;
			});
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			},
			...mapMutations({
				changeShopCarts:'changeShopCarts',
				changeOrders:'changeOrders'
			})
		},
		computed:{
		  	...mapState(['products','shopCarts','userinfo'])
		}
	}
</script>

<style lang="less">
	@import '../assets/css/shop_cart.less';
	
</style>