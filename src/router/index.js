//==============================================开始引入组件============================================================
import Vue from 'vue'
import Router from 'vue-router'
const orderList  = () => import('../components/wechatpay/orderList');
const baseLayout = () => import('../components/base/baseLayout');
Vue.use(Router);

//==============================================引入二级模块============================================================
//微信支付
const wechatpayRouters = [
  {path:'orderList',component:orderList},
];


//==============================================引入一级模块============================================================
export default new Router({
  //去掉#号
  mode:'history',
  routes: [
    {path:'/wechatpay',component:baseLayout,children:wechatpayRouters},//微信支付
    { path: '*', redirect: '/wechatpay/orderList' }
  ]
})
