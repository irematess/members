<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchUsers } from '../services/userService'
import MemberList from '@/components/MemberList.vue'

const members = ref([])

onMounted(() => {
  fetchUsers().then((data) => (members.value = data))
})
</script>

<template>
  <div>
    <header>
      <h1>Members ({{ members.length }})</h1>
      <main>
        <MemberList v-for="member in members" :key="member.id" :member="member" />
      </main>
    </header>
  </div>
</template>

<style>
body {
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

main {
  padding: 0;
  margin: 0;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
}
</style>
