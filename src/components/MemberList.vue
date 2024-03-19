<script setup lang="ts">
const props = defineProps({
  member: { type: Object }
})
</script>

<template>
  <article>
    <figure>
      <img :src="`https://api.dicebear.com/8.x/pixel-art/svg?seed=${member.username}`" alt="" />
    </figure>
    <ul>
      <li>{{ member.name }}</li>
      <li>@{{ member.username }}</li>
      <li>{{ member.email }}</li>
      <li>{{ member.address.city }}</li>
      <li>{{ member.phone }}</li>
      <li>{{ member.website }}</li>
      <li>{{ member.company.name }}</li>
    </ul>
  </article>
</template>
<style scoped>
article {
  background-color: white;
  -webkit-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 9px 27px 0px rgba(0, 0, 0, 0.75);
}
figure img {
  width: 150px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  padding: 1px;
  /* border-top: 1px solid rgb(163, 146, 146); */
  border-top: 1px solid;
  text-align: center;
  font-family: cursive;
}

ul li:nth-last-child(0) {
  border-bottom: none;
}

article {
  border: 1px solid rgb(3, 2, 2);
  border-radius: 2rem;
  margin: 0;
  padding: 0;
}
</style>
