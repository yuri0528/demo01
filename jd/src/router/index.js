import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tabbar from '@/components/Tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home/home')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/pages/Classify/classify')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('@/pages/Discover/discover')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/Cart/cart')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/pages/Mine/mine')
    },
  ]
})

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
