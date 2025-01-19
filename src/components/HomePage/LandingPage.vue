<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.tv', { y: 1000, opacity: 0, duration: 1, ease: 'bounce.out' })
  tl.from('.stop', { x: 1000, opacity: 0, duration: 1, ease: 'back' })
  tl.from('.mis1', { x: -1000, opacity: 0, duration: 1, ease: 'back' }, '<')
  tl.from('.circlebw', { x: -1000, opacity: 0, duration: 1, ease: 'back' }, '<')
  tl.from('.circleclr', { x: 1000, opacity: 0, duration: 1, ease: 'back' }, '<')
})
</script>
<template>
  <div
    class="absolute w-full h-[5000px] flex flex-col bg-slate-900 pt-10 -z-10 top-0 overflow-y-hidden overflow-x-hidden"
  >
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
      class="circleclr absolute top-2 sm:top-40 -left-[250px] size-[360px] sm:size-[500px]"
      alt=""
    />
    <img
      src="/public/resources/dash-rt.png"
      class="absolute rotate-90 top-40 right-5 sm:right-32 size-[30px] sm:size-[50px]"
      alt=""
    />
    <div class="w-full h-screen flex">
      <div
        class="relative mx-auto w-full mt-10 sm:mt-5 sm:w-11/12 flex flex-col items-center justify-start"
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
          <p
            class="px-4 font-poppins font-regular sm:px-36 text-center text-white text-sm sm:text-md"
          >
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
        <!-- next section -->
        <div
          class="flex flex-col sm:flex-row items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 px-6 sm:ml-52 my-32"
        >
          <div class="flex flex-col mx-auto sm:w-1/2 gap-4 items-start justify-start">
            <p class="text-xs font-bold font-poppins text-white">WHAT IS MISCONCEPTION?</p>
            <p class="sm:text-4xl text-3xl font-bold font-poppins text-pink-400">
              Defining Misconception
            </p>
            <p class="text-white font-poppins text-sm">
              Misinformation is false, inaccurate, or misleading information that is communicated
              regardless of an intention to deceive. Examples of misinformation are false rumors,
              insults, and pranks.
            </p>
          </div>
          <div
            class="relative flex flex-col mx-auto sm:ml-32 w-4/5 gap-4 items-start justify-start"
          >
            <div class="tv flex flex-col absolute sm:size-[300px] size-[240px] top-16 sm:top-0">
              <img
                src="/public/resources/circle gradient coloured.png"
                alt="tv"
                class="absolute left-20 -top-28 sm:-top-32 z-[50]"
              />
              <div class="relative flex flex-col">
                <img src="/public/resources/tv1.png" alt="tv" class="z-[50]" />
                <img
                  src="/public/resources/shadow.png"
                  class="absolute bottom-[-12px]"
                  alt="shadow"
                />
                <img
                  src="/public/resources/rectangle.png"
                  alt="tv"
                  class="absolute rotate-90 left-96 -top-28 sm:top-32 z-[50]"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Our Resources section -->
        <div
          class="flex flex-col items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 px-6 mt-64 :mt-32"
        >
        <div class="text-center text-pink-400 text-5xl mb-4 sm:text-7xl w-full font-black font-poppins">Our Resources</div>
        <div class="w-full h-[480px] sm:flex-row flex-col space-y-8 items-center sm:justify-between sm:items-start">
          <div class="sm:w-1/3 w-full border-2 h-full overflow-hidden">
            <div class="flex-col">
              <div class="flex w-full sm:h-76 h-[300px]">
                <img src="/public/resources/magazine1.png" class="w-full" alt="">
              </div>
              <div class="bg-pink-400 h-[180px] flex-col p-8 sm:p-6">
                <p class="font-bold text-white text-xl" >LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">DISCOVER</div>
              </div>
            </div>
          </div>
          <div class="sm:w-1/3 w-full flex gap-8 sm:flex-col">
            <div class="w-full h-[220px] border-2"></div>
            <div class="w-full h-[220px] border-2"></div>
          </div>
          <div class="sm:w-1/3 w-full flex gap-8 flex-col">
            <div class="w-full h-[220px] border-2"></div>
            <div class="w-full h-[220px] border-2"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
