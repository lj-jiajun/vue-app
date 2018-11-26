<template>
	<div class="shop-cart">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<h2 slot="mid">购物车</h2>
		</pub-header>
		<div class="sc-content">
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
							<span>&yen;<b>{{item.shop_money}}</b>.00</span>
							<em>x{{item.shop_num}}</em>
						</div>
						<div class="scl-change" v-if="!item.onoff">
							<div class="scl-num">
								<em @click="subtract(item.shop_id)">-</em>
								<input type="text" :value="item.shop_num" @input="numChange(index,$event)"/>
								<em @click="add(item.shop_id)">+</em>
							</div>
							<span @click="del(index)">删除</span>
						</div>
					</div>
					<div class="scl-gift">
						<i class="icon iconfont icon-huodong"></i>
						<span>满{{item.freePost}}包邮，两件{{item.discountRate}}折。</span>
					</div>
				</li>
			</ul>
		</div>
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
	import {mapState,mapMutations} from 'vuex';
	import PubHeader from '@/components/public/header.vue';
	
	export default {
		name:"ShopList",
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
			check(id){
				var num = 0;
				var aindex = 0;
				this.carts.map((item,index)=>{
					if(item.shop_id==id){
						item.checked = !item.checked;
						aindex = index;
					}
					if(item.checked){
						num++;
					}
				});
				if(this.carts.length==num){
					this.allCheck();
				}else{
					if(this.allchecked){
						this.allCheck();
						this.carts[aindex].checked = true;
					}
				}
				this.getTotalAmount();
			},
			subtract(id){
				this.carts.map((item,index)=>{
					if(item.shop_id==id){
						if(item.shop_num>1){
							item.shop_num--;
						}else{
							item.shop_num = 1;
						}
						item.shop_money = item.shop_num*item.price;
					}
				});
			},
			add(id){
				this.carts.map((item,index)=>{
					if(item.shop_id==id){
						item.shop_num++;
					}
					item.shop_money = item.shop_num*item.price;
				});
			},
			numChange(index,ev){
				this.carts[index].shop_num = ev.target.value;
				this.carts[index].shop_money = this.carts[index].shop_num*this.carts[index].price;
			},
			change(id){
				this.carts.map((item,index)=>{
					if(item.shop_id==id){
						item.onoff = false;
					}
				});
			},
			finish(id){
				this.carts.map((item,index)=>{
					if(item.shop_id==id){
						item.onoff = true;
					}
				});
				var arr = this.carts.map((item,index)=>{
					return {
						shop_id:item.shop_id,
						user_id:item.user_id,
						pro_id:item.pro_id,
						shop_num:item.shop_num,
						shop_money:item.shop_money
					}
				});
				this.changeShopCarts(arr);
			},
			del(ind){
				this.carts = this.carts.filter((item,index)=>{
					return ind!=index;
				});
				var arr = this.carts.map((item,index)=>{
					return {
						shop_id:item.shop_id,
						user_id:item.user_id,
						pro_id:item.pro_id,
						shop_num:item.shop_num,
						shop_money:item.shop_money
					}
				});
				this.changeShopCarts(arr);
			},
			allCheck(){
				this.allchecked = !this.allchecked;
				if(this.allchecked){
					this.carts.map((item,index)=>{
						item.checked = true;
					});
				}else{
					this.carts.map((item,index)=>{
						item.checked = false;
					});
				}
				this.getTotalAmount();
			},
			getTotalAmount(){
				this.totalAmount = 0; 
				this.carts.map((item,index)=>{
					if(item.checked){
						this.totalAmount += item.shop_num*item.price;
					}
				});
			},
			settlement(){
				var arr1 = this.carts.filter((item,index)=>{
						return !item.checked;
				}).map((item,index)=>{
					return {
						shop_id:item.shop_id,
						user_id:item.user_id,
						pro_id:item.pro_id,
						shop_num:item.shop_num,
						shop_money:item.shop_money
					}
				});
				var arr2 = this.carts.filter((item,index)=>{
						return item.checked;
				}).map((item,index)=>{
					return {
						shop_id:item.shop_id,
						user_id:item.user_id,
						pro_id:item.pro_id,
						shop_num:item.shop_num,
						shop_money:item.shop_money
					}
				});
				this.changeShopCarts(arr1);
				this.changeOrders(arr2);
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