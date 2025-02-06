<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.pin2', {
    x: 2000,
    scrollTrigger: {
      trigger: '.pin2',
      start: 'top 1%',
      end: 'bottom 1%',
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  })
})
</script>
<template>
  <div class="pin2 flex flex-col space-y-20 items-center justify-center w-full h-screen bg-white">
    <div class="flex flex-col space-y-2 items-center">
      <div class="text-center text-md font-bold text-pink-500 font-poppins">EXERCISE SCEPTISM</div>
      <div class="text-center text-6xl font-bold text-black font-poppins">Reporting</div>
      <div class="text-center text-6xl font-bold text-black font-poppins">Misinformation</div>
    </div>
    <div class="flex items-center justify-between px-20 space-x-20">
      <div class="w-1/3 flex flex-col gap-10">
        <div class="size-32 bg-pink-500 rounded-full flex items-center justify-center">
          <img src="/public/resources/phone-icon.png" alt=""  class="size-16" >
        </div>
        <p class="text-md font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div class="w-1/3 flex flex-col gap-10">
        <div class="size-32 bg-pink-500 rounded-full flex items-center justify-center">
          <img src="/public/resources/comp-icon.png" alt=""  class="size-16" >
        </div>
        <p class="text-md font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div class="w-1/3 flex flex-col gap-10">
        <div class="size-32 bg-pink-500 rounded-full flex items-center justify-center">
          <img src="/public/resources/papers-icon.png" alt=""  class="size-16" >
        </div>
        <p class="text-md font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  </div>
</template>
