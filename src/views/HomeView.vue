<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchUsers } from '../services/userService'
import UserList from '@/components/UserList.vue'

const users = ref([])

onMounted(() => {
  fetchUsers().then((data) => (users.value = data))
})
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Users ({{ users.length }})</h1>
    </header>
    <main class="userList">
      <UserList v-for="(user, index) in users" :key="index" :user="user" />
    </main>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 3rem;
}
.title {
  text-align: center;
  font-style: italic;
  font-weight: 100;
}

.userList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
}
</style>
