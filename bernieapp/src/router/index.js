import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'
import ShopCart from '@/components/shopCart'
import User from '@/components/user'

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
    }
  ]
})
