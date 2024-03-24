<script setup lang="ts">
import MemberDetail from '@/components/MemberDetail.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <MemberDetail />
  <nav>
    <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
    <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
    <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
  </nav>
</template>
<style scoped>
nav {
  align-items: center;
  width: 875px;
  display: flex;
  justify-content: space-around;
  margin-left: 2.2rem;
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
