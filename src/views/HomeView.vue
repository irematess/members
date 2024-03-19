<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchUsers } from '../services/userService'
import MemberList from '@/components/MemberList.vue'

const users = ref([])

onMounted(() => {
  fetchUsers().then((data) => (users.value = data))
})
</script>

<template>
  <div>
    <header>
      <h1>Members ({{ users.length }})</h1>
      <main>
        <MemberList v-for="item in users" :key="item.id" :member="item" />
      </main>
    </header>
  </div>
</template>

<style>
body {
  background: rgb(252, 247, 101);
  background: radial-gradient(circle, rgba(252, 247, 101, 1) 0%, rgba(255, 255, 255, 1) 100%);
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}

header h1 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}

/* div {
  width: 100%;
  border: solid pink;
  border-width: 1rem 0rem 1rem 0rem;
} */
main {
  padding: 0;
  margin: 0;
  border-radius: 2rem;

  /* padding: 2rem 12rem 2rem 12rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
}
</style>
