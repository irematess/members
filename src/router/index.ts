import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberPostsView from '@/views/MemberPostsView.vue'
import MemberPostsDetailView from '@/views/MemberPostsDetailView.vue'
import MemberAlbumsView from '@/views/MemberAlbumsView.vue'
import MemberTodosView from '@/views/MemberTodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/member/:memberId/posts',
      name: 'posts',
      component: MemberPostsView
    },
    {
      path: '/member/:memberId/posts/:postId',
      name: 'postsDetail',
      component: MemberPostsDetailView
    },

    {
      path: '/member/:memberId/albums',
      name: 'albums',
      component: MemberAlbumsView
    },

    {
      path: '/member/:memberId/todos',
      name: 'todos',
      component: MemberTodosView
    }
  ]
})

export default router
