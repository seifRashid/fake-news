<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.box',
    start:'top 80%',
    end:'bottom 20%',
    scrub:true,
    markers:true,
    toggleActions:'play none none reverse'
  }
})
tl.to('.box', {x:200, duration:3, ease:'back'})
tl.to('.box', {y:200, duration:3})
tl.to('.box', {x:0, duration:3})

})
</script>
<template>
  <div class="w-full h-screen bg-pink-300"></div>
  <div class="box w-[100px] h-[100px] bg-green-500 rounded-lg"></div>
  <div class="w-full h-screen bg-pink-300"></div>
</template>
