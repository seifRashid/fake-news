<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.el', { x: 500, duration: 2 , scrollTrigger:'.el2'})
})
</script>
<template>
  <div class="div1 bg-green-500 h-screen w-full flex flex-col items-center justify-center">
    <h1 class="font-bold text-4xl">Animation from Gsap Animations</h1>
  </div>
  <div class="div2 bg-pink-500 h-screen w-full flex flex-col justify-center">
    <h1 class="el font-bold text-4xl">Animation from Gsap Animations</h1>
    <h1 class="el2 font-bold mt-56 text-4xl">Animate top elemt on enter to viewport</h1>
  </div>
</template>
