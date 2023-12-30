import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsList from '@/components/posts/posts-list/posts-list.vue'
import PostCreate from '@/components/posts/posts-create/posts-create.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: 'PostsList',
    component: PostsList
  }, 
  {
      path: '/posts/create',
      name: 'PostCreate',
      component: PostCreate
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
