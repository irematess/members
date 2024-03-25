<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchUsersAlbumsDetail } from '@/services/userService'
const route = useRoute()
const photos = ref()

onMounted(async () => {
  await fetchUsersAlbumsDetail(Number(route.params.userId)).then((data) => (photos.value = data))
})
</script>
<template>
  <div class="container">
    <UserDetail />
    <nav class="navbar">
      <router-link :to="`/user/${route.params.userId}/posts`">Posts</router-link>
      <router-link :to="`/user/${route.params.userId}/albums`">Albums</router-link>
      <router-link :to="`/user/${route.params.userId}/todos`">Todos</router-link>
    </nav>
    <h1 class="title" v-if="photos">Photos({{ photos.length }})</h1>
    <div class="photos">
      <img :src="photo.thumbnailUrl" v-for="(photo, index) in photos" :key="index" />
    </div>
  </div>
</template>
<style scoped>
.navbar a:nth-child(2) {
  background-color: yellowgreen;
}

.photos {
  padding: 1rem 0;
  gap: 1rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
