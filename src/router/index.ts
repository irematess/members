import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '@/views/MemberView.vue'
import MemberAlbumView from '@/views/MemberAlbumView.vue'
import MemberPostsView from '@/views/MemberPostsView.vue'
import MemberTodoView from '@/views/MemberTodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/member/:memberId',
      name: 'member',
      component: MemberView
    },
    {
      path: '/member/:memberId/albums',
      name: 'albums',
      component: MemberAlbumView
    },
    {
      path: '/member/:memberId/posts',
      name: 'posts',
      component: MemberPostsView
    },
    {
      path: '/member/:memberId/todo',
      name: 'todo',
      component: MemberTodoView
    }
  ]
})

export default router
