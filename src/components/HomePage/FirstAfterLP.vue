<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.sun', { x: 500, duration: 2, scrollTrigger: '.sun' })
  gsap.from('.define', {
    x: -500,
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: 'back',
    scrollTrigger: '.define',
  })
  gsap.from('.textEl', {
    duration: 4,
    text: '',
    ease: 'back',
    scrollTrigger: '.textEl',
  })
  gsap.from('.textEl2', {
    opacity:0,
    y:100,
    duration: 0.5,
    ease: 'none',
    scrollTrigger:{
      trigger: '.textEl2',
      start:'top 90%',
    },
  })
})
</script>
<template>
  <div class="flex flex-col mx-auto sm:w-1/2 gap-4 items-start justify-start">
    <p class="textEl2 text-xs font-bold font-poppins text-white">WHAT IS MISCONCEPTION?</p>
    <p class="define sm:text-4xl text-3xl font-bold font-poppins text-pink-400">
      Defining Misconception
    </p>
    <p class="textEl text-white font-poppins text-sm">
      Misinformation is false, inaccurate, or misleading information that is communicated regardless
      of an intention to deceive. Examples of misinformation are false rumors, insults, and pranks.
    </p>
  </div>
  <div class="relative flex flex-col mx-auto sm:ml-32 w-4/5 gap-4 items-start justify-start">
    <div class="flex flex-col absolute sm:size-[300px] size-[240px] top-16 sm:top-0">
      <img
        src="/public/resources/circle gradient coloured.png"
        alt="tv"
        class="sun absolute left-20 -top-28 sm:-top-32 z-[50]"
      />
      <div class="relative flex flex-col">
        <img src="/public/resources/tv1.png" alt="tv" class="tv z-[50]" />
        <img src="/public/resources/shadow.png" class="absolute bottom-[-12px]" alt="shadow" />
        <img
          src="/public/resources/rectangle.png"
          alt="tv"
          class="absolute rotate-90 left-96 -top-28 sm:top-32 z-[50]"
        />
      </div>
    </div>
  </div>
</template>
