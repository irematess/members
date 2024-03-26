<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import UserNavbar from '@/components/UserNavbar.vue'
import { fetchUsersAlbums } from '@/services/userService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const albums = ref()

const route = useRoute()

onMounted(async () => {
  await fetchUsersAlbums(Number(route.params.userId)).then((data) => (albums.value = data))
})
</script>
<template>
  <div class="container">
    <UserDetail />
    <UserNavbar />

    <main>
      <h1 class="title" v-if="albums">Albums ({{ albums.length }})</h1>
      <div class="albums">
        <article class="album" v-for="(album, index) in albums" :key="index">
          <router-link :to="`/user/${route.params.userId}/albums/${album.id}`">{{
            album.title
          }}</router-link>
        </article>
      </div>
    </main>
  </div>
</template>
<style scoped>
.albums {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.album {
  background-color: greenyellow;
  justify-content: center;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  margin: 0;
  text-align: center;
}
</style>
