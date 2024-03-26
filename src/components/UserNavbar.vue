<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <nav class="navbar">
    <router-link :to="`/user/${route.params.userId}/posts/`">Posts</router-link>
    <router-link :to="`/user/${route.params.userId}/albums/`">Albums</router-link>
    <router-link :to="`/user/${route.params.userId}/todos/`">Todos</router-link>
  </nav>
</template>
<style scoped>
.navbar {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar a {
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem 6.6rem 1rem 6.6rem;
  text-decoration: none;
  font-size: 1rem;
  color: black;
}

.navbar a:nth-child(2) {
  margin: 0 1rem;
}
</style>
