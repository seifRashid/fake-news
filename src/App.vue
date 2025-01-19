<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div
      class="flex px-4 sm:px-20 items-center justify-between text-white bg-transparent mt-0 pt-4 bg-slate-900 z-10"
    >
      <div class="flex gap-2 items-center">
        <h1 class="text-4xl font-extrabold text-pink-400" >WN</h1>
        <h1 class="text-2xl font-bold">Web-News</h1>
      </div>
      <nav class="flex items-center gap-10">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
