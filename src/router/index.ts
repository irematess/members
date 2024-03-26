import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserPostsDetailView from '@/views/UserPostsDetailView.vue'
import UserAlbumsView from '@/views/UserAlbumsView.vue'
import UserAlbumsDetailView from '@/views/UserAlbumsDetailView.vue'
import UserTodosView from '@/views/UserTodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:userId/posts',
      name: 'posts',
      component: UserPostsView,
      children: [
        // {
        //   path: ':postId',
        //   component: UserPostsDetailView
        // }
      ]
    },
    {
      path: '/user/:userId/posts/:postId',
      name: 'postsDetail',
      component: UserPostsDetailView
    },

    {
      path: '/user/:userId/albums',
      name: 'albums',
      component: UserAlbumsView
    },

    {
      path: '/user/:userId/albums/:albumId',
      name: 'albumsDetail',
      component: UserAlbumsDetailView
    },

    {
      path: '/user/:userId/todos',
      name: 'todos',
      component: UserTodosView
    }
  ]
})

export default router
