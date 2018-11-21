<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide>
				<img src="./../../assets/img/banner_01.jpg" alt=""/>
			</swiper-slide>
			<swiper-slide>
				<img src="./../../assets/img/banner_02.jpg" alt=""/>
			</swiper-slide>
			<swiper-slide>
				<img src="./../../assets/img/banner_03.jpg" alt=""/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	
	export default {
		name: "HomeBanner",
		conponents:{
			swiper,
			swiperSlide
		},
		data() {
		    return {
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
		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 16rem;
		overflow: hidden;
	}
	.swiper-slide{
		width: 100%;
	  	height: 16rem;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	.swiper-pagination{
		bottom: 2rem;
	}
	.swiper-pagination-bullet{
		width: 0.5rem;
		height: 0.5rem;
		background: #fff;
	}
	.swiper-pagination-bullet-active{
		background: #f4ba19;
	}
</style>