<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchUsers } from '../services/userService'

const users = ref([])

onMounted(() => {
  fetchUsers().then((data) => (users.value = data))
})
</script>

<template>
  <div></div>
</template>
