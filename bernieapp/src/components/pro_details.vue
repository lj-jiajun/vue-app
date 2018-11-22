<template>
	<div class="proDetails">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<!--<div slot="left">
				<i class="icon iconfont icon-weizhifuben"></i>
				<span>广州</span>
			</div>-->
			<ul slot="mid" class="tab">
				<li :class="tabNum==1?'active':''" @click="changeTab(1)">商品</li>
				<li :class="tabNum==2?'active':''" @click="changeTab(2)">评价</li>
				<li :class="tabNum==3?'active':''" @click="changeTab(3)">详情</li>
				<!--<i class="icon iconfont icon-oc-search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>-->
				<!--<span class="icon iconfont icon-552dc065f0478"></span>-->
			</ul>
			<span slot="right" class="icon iconfont icon-fenxiang"></span>
			<!--<em slot="right" class="searchTxt">搜索</em>-->
		</pub-header>
		<div class="pd-content" id="pdc">
			<div>
				<div class="pd-banner">
					<swiper :options="swiperOption" ref="mySwiper">
						<swiper-slide>
							<img :src="info.imgSrc" alt=""/>
						</swiper-slide>
						<swiper-slide>
							<img :src="info.imgSrc" alt=""/>
						</swiper-slide>
						<swiper-slide>
							<img :src="info.imgSrc" alt=""/>
						</swiper-slide>
					</swiper>
					<div class="swiper-pagination pagefocus"></div>
				</div>
				<div class="pd-goods">
					<h2>{{info.title}}</h2>
					<div class="pd-price">
						<p><span>￥<em>{{info.price}}.00</em></span><i>活动价</i></p>
						<p class="oldPrice"><span>价格</span><em>￥{{info.oldprice}}.00</em></p>
					</div>
					<div class="sellInfo">
						<em>快递 0.00</em>
						<span>销量{{info.sales}}</span>
						<i>广东深圳</i>
					</div>
					<div class="coupons">
						<div>
							<h3>领取优惠券</h3>
							<em class="icon iconfont icon-right"></em>
							<p>
								<i class="icon iconfont icon-zhengpin">正品保证</i>
								<i class="icon iconfont icon-7">七天包换</i>
								<i class="icon iconfont icon-baoyou-copy">商家包邮</i>
							</p>
						</div>
					</div>
					<div class="pd-type">
						<h3>选择颜色分类</h3>
						<em class="icon iconfont icon-right"></em>
					</div>
					<div class="pd-param">
						<div>
							<h3>产品参数</h3>
							<em class="icon iconfont icon-right"></em>
						</div>
					</div>
				</div>
				<div class="pd-evaluation">
					<h2><span><i class="icon iconfont icon-xiaoxi"></i>评论</span></h2>
					<h3><span>商品评价</span>(3165)</h3>
					<ul class="pde-list">
						<li>
							<div class="pde-user">
								<img src="../assets/img/user-pc1.png" alt="" />
								<span>q***j</span>
							</div>
							<p class="pde-text">
								产品包装很用心，用料非常良心，全自动机械机芯观感好，
								大弧面表盘玻璃真的可以说卓越。全表设计简约、大气，表带细腻...
							</p>
							<div class="pde-type">
								<span>2017-11-11</span>
								<i>颜色分类：</i>
								<em>黑壳黑面黑钢带</em>
							</div>
						</li>
					</ul>
					<div class="pde-more">
						<input type="button" value="查看全部评论"/>
					</div>
				</div>
				<div class="pd-info">
					<h2><span><i class="icon iconfont icon-xiaoxi"></i>评论</span></h2>
					<div class="pdi-img">
						<img src="../assets/img/watch-pd2.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="pd-tab">
			<ul class="pdt-list">
				<li class="active">
					<i class="icon iconfont icon-icon-test"></i>
					<span>卖家</span>
				</li>
				<li>
					<i class="icon iconfont icon-aixin"></i>
					<span>关注</span>
				</li>
				<li>
					<i class="icon iconfont icon-gouwuchekong"></i>
					<span>购物车</span>
				</li>
			</ul>
			<div class="pdt-btns">
				<input type="button" class="joinCart" value="加入购物车" />
				<input type="button" class="buying" value="立即购买" />
			</div>
		</div>
	</div>
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import {mapState} from 'vuex';
	import PubHeader from '@/components/public/header.vue';
	
	export default {
		name:"ProDetails",
	  	components:{
	  		"pub-header":PubHeader,
			"swiper":swiper,
			"swiper-slide":swiperSlide
	  	},
		data(){
			return {
				info:{},
				tabNum:1,
				swiperOption: {  
//		          	notNextTick: true,
		          	//循环
		          	loop: true,
		          	//设定初始化时slide的索引
		          	initialSlide: 0,
		          	//自动播放
		          	autoplay: true,
//		          	autoplay: {
//		          	    delay: 3000,
//		          	    stopOnLastSlide: false,
//		          	    disableOnInteraction: true,
//		          	},
		          	// 设置轮播
		          	effect: 'flide',
		          	//滑动速度
		          	speed: 800,
		          	//滑动方向
		          	direction: 'horizontal',
		          	//小手掌抓取滑动
		          	// grabCursor : true,
		          	//滑动之后回调函数
		          	on: {
		              	slideChangeTransitionEnd: function(){
		                // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
		              	},
		          	},
		          	//左右点击
//		          	navigation: {
//		              	nextEl: '.swiper-button-next',
//		              	prevEl: '.swiper-button-prev',
//		          	},
		          //分页器设置         
		          	pagination: {
		              	el: '.swiper-pagination',
		              	clickable :true
		          	}
		       },
		        swiperSlides: [1, 2, 3]
			}
		},
		created(){
		  	var obj = this.products.filter((item,index)=>{
				return item.pro_id == this.$route.params.id;
			});
			this.info = obj[0];
//			console.log(obj,this.info);
		},
		methods:{
			goback(ev){
				this.$router.go(-1);
			},
			changeTab(num){
				var pdc = document.getElementById("pdc");
  				this.tabNum = num;
  				switch(num){
  					case 1:pdc.scrollTop="0";
  						break;
  					case 2:pdc.scrollTop="1219";
  						break;
  					case 3:pdc.scrollTop="1219";
  						break;
  					default:
  						break;
  				}
			/*},
			handleScroll() {
	            console.log(document.getElementById("pdc").scrollTop);*/
	        }
		},
		mounted(){
//		    window.addEventListener('scroll', this.handleScroll, true)
//		    document.getElementById("pdc").addEventListener('scroll', this.handleScroll, true)
		},
		computed:{
		  	...mapState(['products'])
		}
	}
</script>

<style lang="less">
	@import '../assets/css/pro_details.less';
	
</style>