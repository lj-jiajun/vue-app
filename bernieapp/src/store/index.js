import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
		userinfo:{
			name:"",
			islogin:false
		}
  },
	mutations:{  // 唯一改变状态管理里面的数据,放的全部是是函数，
		changedArr(state,obj){
			state.arr = obj;
		}
	}
})
