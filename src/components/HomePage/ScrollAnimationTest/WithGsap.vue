<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('.div1',
  { x:200,
    duration: 3,
    scrollTrigger: {
      trigger: '.div1',
      scrub:true,
      pin:true,
      pinSpacing:false,
      start:'center 30%',
      end:'bottom 10%',
      toggleActions:'play reverse restart none',
      markers:true
    } })
  gsap.from('.el',
  { x: 500,
    duration: 4,
    scrollTrigger: {
      trigger: '.el',
      // scrub:true,
      start:'top 70%',
      end:'top 30%',
      toggleActions:'play reverse restart none',
      markers:true
    } })
  gsap.to('.shape',
  { scale: 3,
    duration: 4,
    scrollTrigger: {
      trigger: '.shape',
      // scrub:true,
      pin:true,
      start:'top 80%',
      end:'top 20%',
      toggleActions:'play reverse restart none',
      markers:true
    } })
})
</script>
<template>
  <div class="div1 bg-green-500 h-screen w-full flex flex-col items-center justify-center">
    <h1 class="font-bold text-4xl">Animation from Gsap Animations</h1>
  </div>
  <div class="div2 relative bg-pink-500 h-screen w-full flex flex-col justify-center">
    <h1 class="el font-bold text-4xl">Animation from Gsap Animations</h1>
    <div class="shape size-16 rounded-full text-white text-center ml-72 font-bold flex items-center justify-center bg-green-500">hello</div>
    <h1 class="el2 font-bold mt-56 text-4xl">Animate top elemt on enter to viewport</h1>
  </div>
</template>
