<script setup lang="ts">
import MemberDetail from '@/components/MemberDetail.vue'
import { fetchMembersPostsDetail } from '@/services/userService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const postsDetail = ref()

onMounted(async () => {
  await fetchMembersPostsDetail(Number(route.params.postId)).then(
    (data) => (postsDetail.value = data)
  )
})
const route = useRoute()
</script>
<template>
  <div v-if="postsDetail">
    <MemberDetail />
    <nav>
      <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
      <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
      <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
    </nav>
    <button>
      <router-link :to="`/member/${route.params.memberId}/posts`"
        ><i class="fa-solid fa-left-long"></i
      ></router-link>
    </button>
    <article>
      <h4>{{ postsDetail.title }}</h4>
      <p>{{ postsDetail.body }}</p>
    </article>
  </div>
</template>
<style scoped>
button {
  border: none;
  outline: none;
  margin-left: 2.2rem;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  /* background-color: yellowgreen; */
  background-color: white;
}

button i {
  outline: black;
  color: yellowgreen;
  font-size: 2rem;
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

article {
  border: 1px solid black;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 2rem;
  font-family: cursive;
  width: 800px;
  margin-left: 2rem;
  text-align: center;
}
</style>
