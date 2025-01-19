<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.tv', { y:1000, opacity:0 , duration:1 ,ease:'bounce.out'})
  tl.from('.stop', { x:1000, opacity:0 , duration:1 ,ease:'back'})
  tl.from('.mis1', { x:-1000, opacity:0 , duration:1 ,ease:'back'}, "<")
  tl.from('.circlebw', { x:-1000, opacity:0 , duration:1 ,ease:'back'}, "<")
  tl.from('.circleclr', { x:1000, opacity:0 , duration:1 ,ease:'back'}, "<")
})
</script>
<template>
  <div class="absolute w-full h-auto flex flex-col bg-slate-900 overflow-hidden pt-10 -z-10 top-0">
    <!-- Landing page -->
    <img
      src="/public/resources/rectangle.png"
      class="absolute left-8 sm:left-60 -top-52 sm:-top-48"
      alt=""
    />
    <img
      src="/public/resources/circle gradient bw.png"
      class="circlebw absolute -right-48 sm:-right-52 sm:-top-2 size-[360px] sm:size-[480px]"
      alt=""
    />
    <img src="/public/resources/dash-rt.png" class="absolute size-[30px] sm:size-[50px]" alt="" />
    <img
      src="/public/resources/circle gradient coloured.png"
      class="circleclr absolute -bottom-2 sm:-bottom-40 -left-[250px] size-[360px] sm:size-[500px]"
      alt=""
    />
    <img
      src="/public/resources/dash-rt.png"
      class="absolute rotate-90 top-40 right-5 sm:right-32 size-[30px] sm:size-[50px]"
      alt=""
    />
    <div class="w-full h-screen flex">
      <div
        class="relative mx-auto w-full mt-10 sm:mt-5 sm:w-3/4 flex flex-col items-center justify-start"
      >
        <div class="flex flex-col text-4xl sm:text-6xl sm:gap-2 font-extrabold">
          <h1 class="stop font-poppins font-black text-pink-400">Stop Spreading</h1>
          <h1 class="mis1 font-poppins font-black text-white">Misinformation</h1>
          <h1 class="mis2 font-poppins font-black text-pink-400">Misinformation</h1>
        </div>
        <!-- tv and shadow -->
        <div class="tv flex flex-col absolute sm:size-[300px] size-[180px] top-16 sm:top-24">
          <div class="relative flex flex-col">
            <img src="/public/resources/tv-landingPage.png" alt="tv" class="z-[50]" />
            <img src="/public/resources/shadow.png" class="absolute bottom-[-12px]" alt="shadow" />
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-32 sm:mt-48">
          <p class="px-4 font-poppins font-regular sm:px-36 text-center text-white text-sm sm:text-md">
            Join a full-packed webinar on how to combat misinformation, often associated with ‘fake
            news’ which some scholars define as "fabricated information that mimics news media
            content in form but not in organizational process or intent"
          </p>
          <div class="flex items-center justify-center gap-4 font-bold text-xs sm:text-sm">
            <button
              class="bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-transparent hover:border-2 hover:border-pink-400 transition duration-300 ease-in-out"
            >
              HOW TO HELP
            </button>
            <button
              class="text-white py-2 px-4 rounded-md border-2 border-pink-400 hover:bg-pink-400 transition duration-300 ease-in-out"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
