import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homepage'
import Classify from '@/components/pro_categories'
import ShopCart from '@/components/shop_cart'
import User from '@/components/user'
import Login from '@/components/login'
import Register from '@/components/register'
import ProList from '@/components/pro_list'
import ProDetails from '@/components/pro_details'
import ProSearch from '@/components/pro_search'

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
      path: '/login',
      name: 'Login',
      component: Login
    },,{
      path: '/register',
      name: 'Register',
      component: Register
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
    },{
      path: '/prosearch',
      name: 'ProSearch',
      component: ProSearch
    }
  ]
})
