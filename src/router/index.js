import Vue from 'vue'
import Router from 'vue-router'
import index from '../index'
import orderList from '../components/wechatpay/orderList'
import baseLayout from '../components/base/baseLayout'

Vue.use(Router)

const wechatpayRouters = [
  {path:'orderList',component:orderList},
]



export default new Router({
  mode:'history',//去掉#号
  routes: [
    {path: '/index',component: index},
    {path:'/wechatpay',component:baseLayout,children:wechatpayRouters},
    { path: '*', redirect: '/index' }   /*默认跳转路由*/
  ]
})
