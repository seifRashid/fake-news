<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div
      class="flex px-20 items-center justify-between text-white bg-transparent mt-0 pt-4 bg-slate-900 z-10"
    >
      <div class="flex gap-2 items-center">
        <!-- <svg
          fill="#b8529e"
          height="200px"
          width="200px"
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xml:space="preserve"
          stroke="#b8529e"
          class="size-20"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M28,14h-5V6c0-0.6-0.4-1-1-1H4C3.4,5,3,5.4,3,6v18c0,2.2,1.8,4,4,4h17c0.1,0,0.2,0,0.3-0.1c0.2,0,0.4,0.1,0.7,0.1 c2.2,0,4-1.8,4-4v-9C29,14.4,28.6,14,28,14z M10,16H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S10.6,16,10,16z M14,12H8 c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S14.6,12,14,12z M27,24c0,1.1-0.9,2-2,2c-0.2,0-0.4,0-0.6-0.1c0,0,0,0,0,0 c-0.6-0.2-1-0.7-1.2-1.2c0,0,0-0.1,0-0.1C23,24.4,23,24.2,23,24v-8h4V24z"
            ></path>
          </g>
        </svg> -->
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
