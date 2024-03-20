<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMembersDetail } from '@/services/userService'

const route = useRoute()

const member = ref()

onMounted(() => {
  fetchMembersDetail(route.params.id).then((data) => (member.value = data))
})
</script>
<template>
  <div></div>
</template>
