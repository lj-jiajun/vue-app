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
		skList:[{
			title:""
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
			src8
		}
	}
})
