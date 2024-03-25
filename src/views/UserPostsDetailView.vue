<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import { fetchUsersPostsDetail } from '@/services/userService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const postsDetail = ref()

onMounted(async () => {
  await fetchUsersPostsDetail(Number(route.params.postId)).then(
    (data) => (postsDetail.value = data)
  )
})
const route = useRoute()
</script>
<template>
  <div class="container" v-if="postsDetail">
    <UserDetail />
    <nav class="navbar">
      <router-link :to="`/user/${route.params.userId}/posts`">Posts</router-link>
      <router-link :to="`/user/${route.params.userId}/albums`">Albums</router-link>
      <router-link :to="`/user/${route.params.userId}/todos`">Todos</router-link>
    </nav>
    <button>
      <router-link :to="`/user/${route.params.userId}/posts`"
        ><i class="fa-solid fa-left-long"></i
      ></router-link>
    </button>
    <article class="post">
      <h4>
        {{ postsDetail.title }}
      </h4>
      <p>{{ postsDetail.body }}</p>
    </article>
  </div>
</template>
<style scoped>
.navbar a:nth-child(1) {
  background-color: yellowgreen;
}

button {
  border: none;
  outline: none;
  margin-top: 2rem;
  background-color: white;
}

button i {
  -webkit-text-stroke: 1px black;
  color: yellowgreen;
  font-size: 2rem;
}

.post {
  border: 1px solid black;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
}
.post h4 {
  text-shadow: 2px 2px greenyellow;
}
</style>
