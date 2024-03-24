<script setup lang="ts"></script>
<template>
  <div>
    <MemberDetail />
    <nav>
      <router-link :to="`/member/${route.params.memberId}/posts`">Posts</router-link>
      <router-link :to="`/member/${route.params.memberId}/albums`">Albums</router-link>
      <router-link :to="`/member/${route.params.memberId}/todos`">Todos</router-link>
    </nav>
  </div>
</template>
