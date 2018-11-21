<template>
	<div class="proDetails">
		<pub-header>
			<i slot="left" class="icon iconfont icon-fanhui" @click="goback"></i>
			<!--<div slot="left">
				<i class="icon iconfont icon-weizhifuben"></i>
				<span>广州</span>
			</div>-->
			<ul slot="mid" class="tab">
				<li :class="tabNum==1?'active':''" @click="changeTab" data-num="1" >商品</li>
				<li :class="tabNum==2?'active':''" @click="changeTab" data-num="2" >评价</li>
				<li :class="tabNum==3?'active':''" @click="changeTab" data-num="3" >详情</li>
				<!--<i class="icon iconfont icon-oc-search"></i>
				<input type="text" placeholder="商务男表 全场8折起"/>-->
				<!--<span class="icon iconfont icon-552dc065f0478"></span>-->
			</ul>
			<span slot="right" class="icon iconfont icon-fenxiang"></span>
			<!--<em slot="right" class="searchTxt">搜索</em>-->
		</pub-header>
		<div class="pd-content">
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
					<h3>领取优惠券</h3>
					<i class="icon iconfont icon-right"></i>
					<p>
						<i class="icon iconfont icon-zhengpin">正品保证</i>
						<i class="icon iconfont icon-7">七天包换</i>
						<i class="icon iconfont icon-baoyou-copy">商家包邮</i>
					</p>
				</div>
				<div class="pd-type">
					<h3>选择颜色分类</h3>
					<i class="icon iconfont icon-right"></i>
				</div>
				<div class="pd-param">
					<h3>产品参数</h3>
					<i class="icon iconfont icon-right"></i>
				</div>
			</div>
			<div class="pd-evaluation">
				<h2><i class="icon iconfont icon-xiaoxi1">评论</i></h2>
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
						<p>
							<span>2017-11-11</span>
							<i>颜色分类：</i>
							<em>黑壳黑面黑钢带</em>
						</p>
						<input type="button" value="查看全部评论"/>
					</li>
				</ul>
			</div>
			<div class="pd-info">
				<h2><i class="icon iconfont icon-xiaoxi1">评论</i></h2>
				<div class="pdi-img">
					<img src="../assets/img/watch-pd2.png" alt="" />
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
//	import 'swiper/dist/css/swiper.css';
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
			changeTab(ev){
  				this.tabNum = ev.target.dataset.num;
			},
		},
		computed:{
		  	...mapState(['products'])
		}
	}
	
	
/*<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>IconFont</title>
    <link rel="stylesheet" href="demo.css">
    <link rel="stylesheet" href="iconfont.css">
</head>
<body>
    <div class="main markdown">
        <h1>IconFont 图标</h1>
        <ul class="icon_lists clear">
            
                <li>
                <i class="icon iconfont icon-zhengpin"></i>
                    <div class="name">正品</div>
                    <div class="fontclass">.icon-zhengpin</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-weizhifuben"></i>
                    <div class="name">位置 - 副本</div>
                    <div class="fontclass">.icon-weizhifuben</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-shandiao"></i>
                    <div class="name">删掉</div>
                    <div class="fontclass">.icon-shandiao</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-7"></i>
                    <div class="name">7</div>
                    <div class="fontclass">.icon-7</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-shaixuan"></i>
                    <div class="name">筛选</div>
                    <div class="fontclass">.icon-shaixuan</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-oc-search"></i>
                    <div class="name">搜索</div>
                    <div class="fontclass">.icon-oc-search</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-552dc065f0478"></i>
                    <div class="name">扫一扫</div>
                    <div class="fontclass">.icon-552dc065f0478</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-tuihuanhuo"></i>
                    <div class="name">退换货</div>
                    <div class="fontclass">.icon-tuihuanhuo</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-aixin"></i>
                    <div class="name">爱心</div>
                    <div class="fontclass">.icon-aixin</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-xiaoxi1"></i>
                    <div class="name">消息</div>
                    <div class="fontclass">.icon-xiaoxi1</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-zhifuchenggong"></i>
                    <div class="name">支付成功</div>
                    <div class="fontclass">.icon-zhifuchenggong</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-huodong"></i>
                    <div class="name">活动</div>
                    <div class="fontclass">.icon-huodong</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-fenlei"></i>
                    <div class="name">分类 (1)</div>
                    <div class="fontclass">.icon-fenlei</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-huan"></i>
                    <div class="name">换</div>
                    <div class="fontclass">.icon-huan</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-fanhui"></i>
                    <div class="name">返回</div>
                    <div class="fontclass">.icon-fanhui</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-1-att"></i>
                    <div class="name">勾</div>
                    <div class="fontclass">.icon-1-att</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-baoyou-copy"></i>
                    <div class="name">包邮</div>
                    <div class="fontclass">.icon-baoyou-copy</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-daifukuan"></i>
                    <div class="name">待付款 </div>
                    <div class="fontclass">.icon-daifukuan</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-gou"></i>
                    <div class="name">勾</div>
                    <div class="fontclass">.icon-gou</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-qianggou"></i>
                    <div class="name">抢购</div>
                    <div class="fontclass">.icon-qianggou</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-right"></i>
                    <div class="name">方向</div>
                    <div class="fontclass">.icon-right</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-daishouhuo"></i>
                    <div class="name">待收货</div>
                    <div class="fontclass">.icon-daishouhuo</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-icon-test"></i>
                    <div class="name">选中个人中心</div>
                    <div class="fontclass">.icon-icon-test</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-gouwuche"></i>
                    <div class="name">购物车</div>
                    <div class="fontclass">.icon-gouwuche</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-xiaoxi"></i>
                    <div class="name"> 消息</div>
                    <div class="fontclass">.icon-xiaoxi</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-fenxiang"></i>
                    <div class="name">分享</div>
                    <div class="fontclass">.icon-fenxiang</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-zhifushibai"></i>
                    <div class="name">支付失败</div>
                    <div class="fontclass">.icon-zhifushibai</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-daipingjia"></i>
                    <div class="name">待评价</div>
                    <div class="fontclass">.icon-daipingjia</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-shezhi"></i>
                    <div class="name">设置</div>
                    <div class="fontclass">.icon-shezhi</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-daifahuo"></i>
                    <div class="name">待发货</div>
                    <div class="fontclass">.icon-daifahuo</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-shanchu"></i>
                    <div class="name">删  除</div>
                    <div class="fontclass">.icon-shanchu</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-gouwuchekong"></i>
                    <div class="name">购物车空</div>
                    <div class="fontclass">.icon-gouwuchekong</div>
                </li>
            
                <li>
                <i class="icon iconfont icon-shouye3-copy"></i>
                    <div class="name">首页</div>
                    <div class="fontclass">.icon-shouye3-copy</div>
                </li>
            
        </ul>

        <h2 id="font-class-">font-class引用</h2>
        <hr>

        <p>font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题。</p>
        <p>与unicode使用方式相比，具有如下特点：</p>
        <ul>
        <li>兼容性良好，支持ie8+，及所有现代浏览器。</li>
        <li>相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。</li>
        <li>因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。</li>
        <li>不过因为本质上还是使用的字体，所以多色图标还是不支持的。</li>
        </ul>
        <p>使用步骤如下：</p>
        <h3 id="-fontclass-">第一步：引入项目下面生成的fontclass代码：</h3>


        <pre><code class="lang-js hljs javascript"><span class="hljs-comment">&lt;link rel="stylesheet" type="text/css" href="./iconfont.css"&gt;</span></code></pre>
        <h3 id="-">第二步：挑选相应图标并获取类名，应用于页面：</h3>
        <pre><code class="lang-css hljs">&lt;<span class="hljs-selector-tag">i</span> <span class="hljs-selector-tag">class</span>="<span class="hljs-selector-tag">iconfont</span> <span class="hljs-selector-tag">icon-xxx</span>"&gt;&lt;/<span class="hljs-selector-tag">i</span>&gt;</code></pre>
        <blockquote>
        <p>"iconfont"是你项目下的font-family。可以通过编辑项目查看，默认是"iconfont"。</p>
        </blockquote>
    </div>
</body>
</html>*/

</script>

<style lang="less">
	@import '../assets/css/pro_details.less';
	
</style>