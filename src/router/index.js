import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/about",
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
        path:"/about/center",
        name:'center',
        component: () => import(/* webpackChunkName: "center" */ '../views/center.vue'),
        meta:{required:true}         //需要拦截一波
      },
      {
        path:"/about/footer",
        name:'footer',
        component: () => import(/* webpackChunkName: "footer" */ '../views/footer.vue'),
        meta:{required:true}
      },
    ]
  },
  {
    path:"/login",
    neme:"login",
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path:"/detail/:id",
    neme:"detail",
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//路由守卫
router.beforeEach((to,from,next)=>{
    //判断是否 登录
    if(to.meta&&to.meta.required&&!store.state.tokens){
        next({
          path:"/login",
        })
    }else{
        next();
    }
})

export default router
