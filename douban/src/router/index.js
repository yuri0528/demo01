import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home/home')
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: () => import('@/pages/Broadcast/broadcast')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/pages/Mine/mine')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('@/pages/Group/group')
    },
    {
      path: '/audio',
      name: 'audio',
      component: () => import('@/pages/Audio/audio'),
      children: [
        {path:'/',redirect:'film'},
        { path: 'film', component: () => import('@/pages/Audio/sub/film'), },
        { path: 'read', component: () => import('@/pages/Audio/sub/read') },
        { path: 'tv', component: () => import('@/pages/Audio/sub/tv') },
        { path: 'city', component: () => import('@/pages/Audio/sub/city') },
        { path: 'music', component: () => import('@/pages/Audio/sub/music') }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login/login')
    },
    {
      path: '/login2',
      name: 'login2',
      component: () => import('@/pages/Login/login2')
    }
  ]
})

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}