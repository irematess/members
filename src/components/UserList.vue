<script setup lang="ts">
const props = defineProps({
  user: { type: Object }
})
</script>

<template>
  <article class="userItem">
    <figure class="userImage">
      <img :src="`https://api.dicebear.com/8.x/pixel-art/svg?seed=${user?.username}`" alt="" />
    </figure>
    <ul v-if="user" class="userDetails">
      <li class="userDetail">
        <router-link :to="`/user/${user.id}/posts`">{{ user.name }}</router-link>
      </li>
      <li class="userDetail">@{{ user.username }}</li>
      <li class="userDetail">{{ user.email }}</li>
      <li class="userDetail">{{ user.address.city }}</li>
      <li class="userDetail">{{ user.phone }}</li>
      <li class="userDetail">{{ user.website }}</li>
      <li class="userDetail">{{ user.company.name }}</li>
    </ul>
  </article>
</template>
<style scoped>
.userItem {
  background-color: white;
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid black;
  border-radius: 2rem;
}

.userImage {
  padding: 1rem;
}

.userDetails {
  list-style: none;
  text-align: center;
  padding-bottom: 0.5rem;
}

.userDetail {
  border-top: 1px solid black;
  padding: 0 1rem;
}

.userDetail a {
  text-decoration: none;
  color: black;
}
</style>
