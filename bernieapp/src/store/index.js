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
			path:"/home/prolist/w1",
			src:src1,
			content:"这是商务男表，欢迎你的到来呀！"
		},{
			title:"精品女表",
			path:"/home/prolist/w2",
			src:src2,
			content:"这是精品女表，欢迎你的到来呀！"
		},{
			title:"运动手表",
			path:"/home/prolist/w3",
			src:src3,
			content:"这是运动手表，欢迎你的到来呀！"
		},{
			title:"石英手表",
			path:"/home/prolist/w4",
			src:src4,
			content:"这是石英手表，欢迎你的到来呀！"
		},{
			title:"学生男表",
			path:"/home/prolist/w5",
			src:src5,
			content:"这是学生男表，欢迎你的到来呀！"
		},{
			title:"智能女表",
			path:"/home/prolist/w6",
			src:src6,
			content:"这是分类，欢迎你的到来呀！"
		},{
			title:"运动手表",
			path:"/home/prolist/w7",
			src:src7,
			content:"这是运动手表，欢迎你的到来呀！"
		},{
			title:"情侣手表",
			path:"/home/prolist/w8",
			src:src8,
			content:"这是情侣手表，欢迎你的到来呀！"
		}],
		proList:[{
			pro_id:"pl_1",
			title:"正品手表手表",
			price:1099,
			discount:"满499减50",
			sales:213,
			imgSrc:img1
		},{
			pro_id:"pl_2",
			title:"正品男士手表皮带手表",
			price:1099,
			discount:"满499减50",
			sales:213,
			imgSrc:img2
		}],
		userinfo:{
			name:"",
			islogin:false
		}
  },
	mutations:{  // 唯一改变状态管理里面的数据,放的全部是是函数，
		changedArr(state,obj){
			state.arr = obj;
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
