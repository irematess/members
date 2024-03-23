<script setup lang="ts">
import MemberDetail from '@/components/MemberDetail.vue'
import { useRoute } from 'vue-router'
import { fetchMembersPosts } from '@/services/userService'
import { ref, onMounted } from 'vue'

const route = useRoute()

const posts = ref()

onMounted(async () => {
  await fetchMembersPosts(Number(route.params.memberId)).then((data) => (posts.value = data))
})
</script>
<template v-if="posts">
  <MemberDetail />
  <nav>
    <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
    <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
    <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
  </nav>
  <article>
    <div v-for="(post, index) in posts" :key="index">{{ post.title }}</div>
  </article>
</template>
<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
article {
  margin-top: 2rem;
  align-items: center;
  width: 875px;
  display: flex;
  flex-direction: column;
}
article div {
  text-align: center;
  margin-left: 4.2rem;
  padding: 0.5rem 0 0.5rem 0;
  width: 875px;
  margin-bottom: 1rem;
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(3, 2, 2);
  border-radius: 1rem;
}
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

nav a:nth-child(1) {
  background-color: yellowgreen;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}
</style>
