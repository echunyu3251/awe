import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/components')
const home = () => import('@/views/home/home.vue')
const login = () => import('@/views/login/login.vue')
const sign = () => import('@/views/login/sign.vue')
const account = () => import('@/views/login/account.vue')
const accountdetails = () => import('@/views/login/accountDetails.vue')
const orders = () => import('@/views/login/orders.vue')
const logis = () => import('@/views/login/logis.vue')
const password = () => import('@/views/login/password.vue')
const wallet = () => import('@/views/login/wallet.vue')

const car = ()=>import('@/views/car/car.vue')
const delivery = ()=>import('@/views/car/delivery.vue')
const pickup = ()=>import('@/views/car/pickup.vue')
const deliverymethod = ()=>import('@/views/car/deliverymethod.vue')
const address = ()=>import('@/views/car/address.vue')
const paypal = ()=>import('@/views/car/paypal.vue')





const all = () => import('@/views/navList/all/all.vue')
const milk = () => import('@/views/navList/milk/milk.vue')
const milkdetails = () => import('@/views/navList/milk/milkdetails.vue')
const bootsdetil = () => import('@/views/navList/boots/bootsdetil.vue')
const boots = () => import('@/views/navList/boots/boots.vue')
const baby = () => import('@/views/navList/baby/baby.vue')
const vitamins = () => import('@/views/navList/vitamins/vitamins.vue')
const beauty = () => import('@/views/navList/beauty/beauty.vue')
const personalcare = () => import('@/views/navList/personalcare/personalcareAhouse.vue')
const clothing = () => import('@/views/navList/clothing/clothingAshoes.vue')
const pantryfood = () => import('@/views/navList/pantryfood/pantryfood.vue')
const korean = () => import('@/views/navList/korean/koreanAjapenese.vue')
const china = () => import('@/views/navList/china/china.vue')
const brand = () => import('@/views/navList/brand/poipularbrands.vue')
const bulk = () => import('@/views/bulk/bulk.vue')





Vue.use(Router)
export default new Router({
  linkExactActiveClass: 'active',
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      x: 0,
      y: 0
    }
  },
  routes: [

    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },

    {
      path: '/home',
      name: 'Home',
      component: index,
      children: [
        {
          path: '/home/login',
          name: 'Login/Register',
          component: login
        },
        {
          path: '/home/sign',
          name: 'Login/Register',
          component: sign
        },
        {
          path: '/home/account',
          name: 'home',
          redirect: '/home/account/accountdetails'
        },
        {
          path: '/home/account',
          name: 'Account Information',
          component: account,
          children:[
            {
              path: '/home/account/accountdetails',
              name: '',
              component: accountdetails
            },
            {
              path: '/home/account/orders',
              name: 'orders',
              component: orders
            },
            {
              path: '/home/account/logis',
              name: 'logis',
              component: logis
            },
            {
              path: '/home/account/password',
              name: 'password',
              component: password
            },
            {
              path: '/home/account/wallet',
              name: 'wallet',
              component: wallet
            },
          ]
        },
        {
          path: '/home/car',
          name: 'Car',
          component: car
        },
        {
          path: '/home/deliverymethod',
          name: 'Delivery Mothod',
          component: deliverymethod,

          children:[
            {
              path: '/home/deliverymethod',
              name: '',
              redirect: '/home/delivery'
            },
            {
              path: '/home/delivery',
              name: '',
              component: delivery
            },
            {
              path: '/home/pickup',
              name: '',
              component: pickup
            },
          ]
        },
        {
          path: '/home/address',
          name: 'Select Delivery Address',
          component: address
        },
        {
          path: '/home/paypal',
          name: 'Billing details',
          component: paypal
        },
        
        {
          path: '/home/bulk',
          name: 'bulk',
          component: bulk
        },
        {
          path: '/home',
          name: 'home',
          meta: { title: 'home' },
          component: all
        },
        {
          path: '/milk',
          name: 'MILKFORMULA',
          meta: { title: 'milk' },
          component: milk,
        },
        {
          path: '/milk/milkdetails',
          name: 'Milkdetails',
          meta: { title: 'Milkdetails' },
          component: milkdetails
        },
        {
          path: '/boots',
          name: 'Boots',
          meta: { title: 'boots' },
          component: boots
        },
        {
          path: '/boots/bootsdetail',
          name: 'Bootsdetail',
          meta: { title: 'Bootsdetail' },
          component: bootsdetil
        },
        {
          path: '/baby',
          name: 'baby',
          component: baby
        },
        {
          path: '/vitamins',
          name: 'vitamins',
          component: vitamins
        },
        {
          path: '/beauty',
          name: 'beauty',
          component: beauty
        },
        {
          path: '/personalcare',
          name: 'personalcare',
          component: personalcare
        },
        {
          path: '/clothing',
          name: 'clothing',
          component: clothing
        },
        {
          path: '/pantryfood',
          name: 'pantryfood',
          component: pantryfood
        },
        {
          path: '/korean',
          name: 'korean',
          component: korean
        },
        {
          path: '/china',
          name: 'china',
          component: china
        },
        {
          path: '/brand',
          name: 'brand',
          component: brand
        }
      ]
    },



  ]
})
