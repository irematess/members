<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import UserNavbar from '@/components/UserNavbar.vue'
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
    <UserNavbar />
    <button>
      <router-link :to="`/user/${route.params.userId}/posts`"
        ><i class="fa-solid fa-left-long"></i
      ></router-link>
    </button>
    <h1 class="title" v-if="photos">Photos({{ photos.length }})</h1>
    <div class="photos">
      <img :src="photo.thumbnailUrl" v-for="(photo, index) in photos" :key="index" />
    </div>
  </div>
</template>
<style scoped>
.photos {
  padding: 1rem 0;
  gap: 1rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
</style>
