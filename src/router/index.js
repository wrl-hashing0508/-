import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/about"
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    redirect:"/about/first",
    children:[
      {
        path:"/about/first",
        name:'First',
        component: () => import(/* webpackChunkName: "first" */ '../views/First.vue'),
      },
      {
        path:"/about/cart",
        name:'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
      },
      {
        path:"/about/my",
        name:'My',
        component: () => import(/* webpackChunkName: "my" */ '../views/My.vue'),
      },
      {
        path:"/about/home",
        component:Home,
      }
    ]
  },
  {
    path:"/detail/:id",
    name:'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detial.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
