import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import src1 from '@/assets/img/watch-icon1.png'
import src2 from '@/assets/img/watch-icon2.png'
import src3 from '@/assets/img/watch-icon3.png'
import src4 from '@/assets/img/watch-icon4.png'
import src5 from '@/assets/img/watch-icon5.png'
import src6 from '@/assets/img/watch-icon6.png'
import src7 from '@/assets/img/watch-icon7.png'
import src8 from '@/assets/img/watch-icon8.png'

import img1 from '@/assets/img/watch-pc1.png'
import img2 from '@/assets/img/watch-pc2.png'
import img3 from '@/assets/img/watch-pc3.png'
import img4 from '@/assets/img/watch-pc4.png'
import img5 from '@/assets/img/watch-pc5.png'
import img6 from '@/assets/img/watch-pc6.png'
import img7 from '@/assets/img/watch-pc7.png'
import img8 from '@/assets/img/watch-pc8.png'
import img9 from '@/assets/img/watch-pc9.png'
import img10 from '@/assets/img/watch-pc10.png'
import img11 from '@/assets/img/watch-pc11.png'
import img12 from '@/assets/img/watch-pc12.png'
import img13 from '@/assets/img/watch-pc13.png'



export default new Vuex.Store({
  state:{
		arr:[{
			title:"首页",
			path:"/home",
			content:"这是首页，欢迎你的到来呀！"
		},{
			title:"分类",
			path:"/classify",
			content:"这是分类，欢迎你的到来呀！"
		},{
			title:"购物车",
			path:"/shopcart",
			content:"这是购物车，欢迎你的到来呀！"
		},{
			title:"个人中心",
			path:"/user",
			content:"这是个人中心，欢迎你的到来呀！"
		}],
		classifies:[{
			title:"商务男表",
			path:"/prolist/w1",
			src:src1,
			content:"这是商务男表，欢迎你的到来呀！"
		},{
			title:"精品女表",
			path:"/prolist/w2",
			src:src2,
			content:"这是精品女表，欢迎你的到来呀！"
		},{
			title:"运动手表",
			path:"/prolist/w3",
			src:src3,
			content:"这是运动手表，欢迎你的到来呀！"
		},{
			title:"石英手表",
			path:"/prolist/w4",
			src:src4,
			content:"这是石英手表，欢迎你的到来呀！"
		},{
			title:"学生男表",
			path:"/prolist/w5",
			src:src5,
			content:"这是学生男表，欢迎你的到来呀！"
		},{
			title:"智能女表",
			path:"/prolist/w6",
			src:src6,
			content:"这是分类，欢迎你的到来呀！"
		},{
			title:"运动手表",
			path:"/prolist/w7",
			src:src7,
			content:"这是运动手表，欢迎你的到来呀！"
		},{
			title:"情侣手表",
			path:"/prolist/w8",
			src:src8,
			content:"这是情侣手表，欢迎你的到来呀！"
		}],
		products:[{
			pro_id:"pl_1",
			title:"正品手表女士手表",
			price:599,
			oldprice:999,
			discount:"满399减50",
			sales:213,
			imgSrc:img1
		},{
			pro_id:"pl_2",
			title:"石英手表防水手表女士手表",
			price:399,
			oldprice:699,
			discount:"满299减50",
			sales:153,
			imgSrc:img2
		},{
			pro_id:"pl_3",
			title:"简约石英手表女士手表",
			price:499,
			oldprice:799,
			discount:"满399减50",
			sales:200,
			imgSrc:img3
		},{
			pro_id:"pl_4",
			title:"优雅时尚女士手表石英手表",
			price:1199,
			oldprice:1599,
			discount:"满599减50",
			sales:255,
			imgSrc:img4
		},{
			pro_id:"pl_5",
			title:"时尚女士手表皮带手表机械手表",
			price:899,
			oldprice:1199,
			discount:"满699减50",
			sales:113,
			imgSrc:img5
		},{
			pro_id:"pl_6",
			title:"时尚女士手表机械手表",
			price:1099,
			oldprice:1699,
			discount:"满999减150",
			sales:168,
			imgSrc:img6
		},{
			pro_id:"pl_7",
			title:"正品光能手表男士手表防水手表",
			price:899,
			oldprice:1199,
			discount:"满499减50",
			sales:208,
			imgSrc:img7
		},{
			pro_id:"pl_8",
			title:"钢带男士手表防水手表机械手表",
			price:999,
			oldprice:1399,
			discount:"满499减50",
			sales:242,
			imgSrc:img8
		},{
			pro_id:"pl_9",
			title:"男士时尚手表电子手表",
			price:799,
			oldprice:1199,
			discount:"满499减50",
			sales:133,
			imgSrc:img9
		},{
			pro_id:"pl_10",
			title:"正品男士手表电子手表",
			price:499,
			oldprice:999,
			discount:"满399减50",
			sales:152,
			imgSrc:img10
		},{
			pro_id:"pl_11",
			title:"时尚男士手表夜光手表",
			price:699,
			oldprice:999,
			discount:"满499减50",
			sales:167,
			imgSrc:img11
		},{
			pro_id:"pl_12",
			title:"男士手表防水手表机械手表",
			price:899,
			oldprice:1399,
			discount:"满599减100",
			sales:186,
			imgSrc:img12
		},{
			pro_id:"pl_13",
			title:"机械手表男士手表防水手表",
			price:1099,
			oldprice:1499,
			discount:"满699减100",
			sales:158,
			imgSrc:img13
		}],
		screenings:[{
			title:"类别",
			content:[{
				checked:false,
				name:"石英表"
			},{
				checked:false,
				name:"时尚女表"
			},{
				checked:false,
				name:"皮带"
			},{
				checked:false,
				name:"钢带"
			},{
				checked:false,
				name:"品质男表"
			},{
				checked:false,
				name:"机械表"
			}]
		},{
			title:"机芯类型",
			content:[{
				checked:false,
				name:"石英表"
			},{
				checked:false,
				name:"自动机械表"
			},{
				checked:false,
				name:"机械表"
			},{
				checked:false,
				name:"电子表"
			},{
				checked:false,
				name:"手动机械表"
			},{
				checked:false,
				name:"光能表"
			}]
		},{
			title:"适合对象",
			content:[{
				checked:false,
				name:"男"
			},{
				checked:false,
				name:"女"
			},{
				checked:false,
				name:"情侣"
			},{
				checked:false,
				name:"中性"
			},{
				checked:false,
				name:"儿童"
			}]
		},{
			title:"风格",
			content:[{
				checked:false,
				name:"时尚潮流"
			},{
				checked:false,
				name:"休闲"
			},{
				checked:false,
				name:"运动"
			},{
				checked:false,
				name:"经典复古"
			},{
				checked:false,
				name:"可爱"
			},{
				checked:false,
				name:"其他"
			}]
		}],
		recentSearches:[
				"时尚男表",
				"唯美女表",
				"自动机械表",
				"电子表",
				"运动表",
				"石英表",
				"精工",
				"天梭"
		],
		wantSearches:[
				"时尚女表",
				"新品上市",
				"热卖产品",
				"限时抢购",
				"限量出售",
				"5折清仓",
				"团购优惠",
				"时尚男表",
				"唯美女表",
				"春季新款",
				"超值特卖",
				"魅力四射"
		],
		userinfo:{
			name:"",
			islogin:false
		}
  },
	mutations:{  // 唯一改变状态管理里面的数据,放的全部是是函数，
		changedArr(state,obj){
			state.arr = obj;
		},
		changeRecentSearches(state,obj){
			state.recentSearches = obj;
		}
	},
	data(){
		return {
			src1,
			src2,
			src3,
			src4,
			src5,
			src6,
			src7,
			src8,
			img1,
			img2,
			img3,
			img4,
			img5,
			img6,
			img7,
			img8,
			img9,
			img10,
			img11,
			img12,
			img13,
		}
	}
})
