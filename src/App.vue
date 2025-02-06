<script setup>
import { RouterLink, RouterView } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
  ScrollTrigger.create({
    trigger:'.bdy',
    start:'bottom 6%',
    markers:true,
    toggleClass:{
      targets:'.changeNav',
      className:'bg-slate-900'
    }
  })
})
</script>

<template>
  <header class="fixed w-full" >
    <div
      class="changeNav flex px-4 sm:px-20 items-center justify-between text-white mt-0 pt-4 z-10"
    >
      <div class="flex gap-2 items-center">
        <h1 class="text-4xl font-poppins font-black text-pink-400" >WN</h1>
        <h1 class="text-2xl font-bold">Web-News</h1>
      </div>
      <nav class="flex items-center gap-10">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="bdy pt-20" />
</template>

<style scoped></style>
