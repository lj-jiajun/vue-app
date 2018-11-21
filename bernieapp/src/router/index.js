import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homepage'
import Classify from '@/components/pro_categories'
import ShopCart from '@/components/shop_cart'
import User from '@/components/user'
import ProList from '@/components/pro_list'
import ProDetails from '@/components/pro_details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/classify',
      name: 'Classify',
      component: Classify
    },{
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/prolist/:id',
      name: 'ProList',
      component: ProList
    },{
      path: '/prodetails/:id',
      name: 'ProDetails',
      component: ProDetails
    }
  ]
})
