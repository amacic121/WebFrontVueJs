import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryView from '../views/CategoryView.vue'
import CommentView from '../views/CommentView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import UserView from '../views/UserView.vue'
// import store, {authHeader} from '../store'
Vue.use(VueRouter)

const routes = [

  {
    path: '/category',
    name: 'category',
    component: CategoryView,
    meta: {auth: true },
    
  },

  {
    path: '/comment',
    name: 'comment',
    component: CommentView,
    meta: {auth: true },
   
  },

  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {auth: false },
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {auth: false },
  },

  {
    path: '/post',
    name: 'post',
    component: PostView,
    meta: {auth: true },
    
  },

  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: {auth: true },
    
  }
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to,from,next) => {
//   if(
//     to.meta.auth && !store.actions[`auth/${authHeader}`]
//   ) {
//     next('/login');
    
//   } else if(!to.meta.auth && store.actionsactions[`auth/${authHeader}`]){
    
//     next('/')
//   }



// });


export default router