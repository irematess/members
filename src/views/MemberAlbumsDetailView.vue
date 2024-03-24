<script setup lang="ts">
import MemberDetail from '@/components/MemberDetail.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchMembersAlbumsDetail } from '@/services/userService'
const route = useRoute()
const photos = ref()

onMounted(async () => {
  await fetchMembersAlbumsDetail(Number(route.params.memberId)).then(
    (data) => (photos.value = data)
  )
})
</script>
<template>
  <MemberDetail />
  <nav>
    <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
    <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
    <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
  </nav>
  <div class="photos">
    <figure v-for="(photo, index) in photos" :key="index">
      <!-- <img :src="photo.thumbnailUrl" /> -->
      <img src="https://picsum.photos/200" alt="" />
    </figure>
  </div>
</template>
<style scoped>
.photos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.photos img {
  width: 230px;
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
</style>
