<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchMembersDetail } from '@/services/userService'
import { onMounted, ref } from 'vue'

const route = useRoute()

const memberDetail = ref()

onMounted(() => {
  fetchMembersDetail(Number(route.params.memberId)).then((data) => (memberDetail.value = data))
})
</script>
<template>
  <div>
    <header v-if="memberDetail">
      <figure>
        <img
          :src="`https://api.dicebear.com/8.x/pixel-art/svg?seed=${memberDetail.username}`"
          alt=""
        />
      </figure>
      <ul>
        <li>{{ memberDetail.name }}</li>
        <li>@{{ memberDetail.username }}</li>
        <li>{{ memberDetail.email }}</li>
        <li>
          {{ memberDetail.address.street }}, {{ memberDetail.address.city }},
          {{ memberDetail.address.suite }}, {{ memberDetail.address.zipcode }},
          {{ memberDetail.address.geo.lat }} {{ memberDetail.address.geo.lng }}
        </li>
        <li>{{ memberDetail.phone }}</li>
        <li>{{ memberDetail.website }}</li>
        <li>{{ memberDetail.company.name }}</li>
      </ul>
    </header>
  </div>
</template>
<style scoped>
header {
  width: 875px;
  border-radius: 2rem;
  border: 1px solid black;
  margin: 2rem 2rem;
  display: flex;
  flex-direction: row;
}

header figure img {
  width: 200px;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
