<script setup lang="ts">
import MemberDetail from '@/components/MemberDetail.vue'
import { fetchMembersAlbums } from '@/services/userService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const albums = ref()

const route = useRoute()

onMounted(async () => {
  await fetchMembersAlbums(Number(route.params.memberId)).then((data) => (albums.value = data))
})
</script>
<template>
  <MemberDetail />
  <nav>
    <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
    <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
    <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
  </nav>
  <h1 v-if="albums">Albums ({{ albums.length }})</h1>
  <div class="albums">
    <article v-for="(album, index) in albums" :key="index">
      {{ album.title }}
    </article>
  </div>
</template>
<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-left: 2.9rem;
}
.albums {
  width: 875px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  margin: 0;
}
nav {
  align-items: center;
  width: 875px;
  display: flex;
  justify-content: space-around;
  margin-left: 2.2rem;
  margin-bottom: 2rem;
}
nav a {
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(3, 2, 2);
  border-radius: 1rem;
  padding: 1rem 6.7rem 1rem 6.7rem;
  margin: 0;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: cursive;
  color: black;
}

nav a:nth-child(2) {
  background-color: yellowgreen;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}

article {
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-left: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
