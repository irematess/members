<script setup lang="ts">
import UserDetail from '@/components/UserDetail.vue'
import UserNavbar from '@/components/UserNavbar.vue'
import { fetchUsersTodos } from '@/services/userService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const todos = ref()

onMounted(async () => {
  await fetchUsersTodos(Number(route.params.userId)).then((data) => (todos.value = data))
})
</script>
<template>
  <div class="container">
    <UserDetail />
    <UserNavbar />
    <ul class="todos">
      <li
        class="todo"
        v-for="(todo, index) in todos"
        :key="index"
        :class="{ completed: todo.completed }"
      >
        {{ todo.title }}
        <i class="fa-solid fa-check" v-if="todo.completed"></i>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.navbar a:nth-child(3) {
  background-color: yellowgreen;
}
.todo {
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin-bottom: 1rem;
}

.completed {
  background-color: greenyellow;
}
</style>
