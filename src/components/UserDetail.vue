<script setup lang="ts">
import { useRoute } from 'vue-router'
import { fetchUsersDetail } from '@/services/userService'
import { ref, onMounted } from 'vue'

const route = useRoute()

const userDetail = ref()

onMounted(() => {
  fetchUsersDetail(Number(route.params.userId)).then((data) => (userDetail.value = data))
})
</script>
<template>
  <header v-if="userDetail" class="header">
    <figure class="userImage">
      <img :src="`https://api.dicebear.com/8.x/pixel-art/svg?seed=${userDetail.username}`" alt="" />
    </figure>
    <ul class="userDetails">
      <li><i class="fa-solid fa-user"></i> {{ userDetail.name }}</li>
      <li><i class="fa-solid fa-at"></i> {{ userDetail.username }}</li>
      <li><i class="fa-solid fa-envelope"></i> {{ userDetail.email }}</li>
      <li>
        <i class="fa-solid fa-location-dot"></i>
        {{ userDetail.address.street }}, {{ userDetail.address.city }},
        {{ userDetail.address.suite }}, {{ userDetail.address.zipcode }},
        {{ userDetail.address.geo.lat }} {{ userDetail.address.geo.lng }}
      </li>
      <li><i class="fa-solid fa-phone"></i> {{ userDetail.phone }}</li>
      <li><i class="fa-solid fa-arrow-pointer"></i> {{ userDetail.website }}</li>
      <li><i class="fa-solid fa-building"></i> {{ userDetail.company.name }}</li>
    </ul>
  </header>
</template>
<style scoped>
.header {
  border-radius: 2rem;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 0 1rem;
}

.userImage img {
  width: 250px;
}

.userDetails {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: dashed;
}
</style>
