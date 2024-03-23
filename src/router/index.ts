import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberPostsView from '@/views/MemberPostsView.vue'
import MemberAlbumView from '@/views/MemberAlbumView.vue'
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
      path: '/member/:memberId/posts',
      name: 'posts',
      component: MemberPostsView
    },
    {
      path: '/member/:memberId/albums',
      name: 'albums',
      component: MemberAlbumView
    },

    {
      path: '/member/:memberId/todos',
      name: 'todo',
      component: MemberTodoView
    }
  ]
})

export default router
