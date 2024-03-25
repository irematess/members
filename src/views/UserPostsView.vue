<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import { useRoute } from 'vue-router'
import { fetchUsersPosts } from '@/services/userService'
import { ref, onMounted } from 'vue'

const route = useRoute()

const posts = ref()

onMounted(async () => {
  await fetchUsersPosts(Number(route.params.userId)).then((data) => (posts.value = data))
})
</script>
<template v-if="posts">
  <div class="container">
    <UserDetail />
    <nav class="navbar">
      <router-link :to="`/user/${route.params.userId}/posts`">Posts</router-link>
      <router-link :to="`/user/${route.params.userId}/albums`">Albums</router-link>
      <router-link :to="`/user/${route.params.userId}/todos`">Todos</router-link>
    </nav>
    <article v-if="posts" class="posts">
      <h1 class="title">Posts ({{ posts.length }})</h1>
      <router-link
        :to="`/user/${route.params.userId}/posts/${post.id}`"
        v-for="(post, index) in posts"
        :key="index"
        class="post"
      >
        {{ post.title }}</router-link
      >
    </article>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navbar a:nth-child(1) {
  background-color: yellowgreen;
}

.posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-style: italic;
  font-weight: 100;
  margin-bottom: 1rem;
}

.post {
  text-decoration: none;
  text-align: center;
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  padding: 0.5rem 2rem;
  border: 1px solid black;
  border-radius: 1rem;
  width: 810px;
  margin-bottom: 1rem;
}
</style>
