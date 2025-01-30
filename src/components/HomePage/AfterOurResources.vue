<script setup>
import HowToSpotSection from './HowToSpotSection.vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

onMounted(()=>{
  gsap.registerPlugin(ScrollTrigger)
 gsap.to('.pin',{
  scrollTrigger:{
    trigger:'.pin',
    start: 'top',
    end: 'bottom',
    scrub:true,
    pin:true
  }
 })
})

</script>
<template>
  <div
    class="pin relative -z-20 overflow-hidden sm:h-[700px] h-[500px] bg-[#f2f1ec] flex flex-col items-center justify-start w-full sm:items-start sm:justify-start gap-4 sm:w-full sm:mx-auto px-6 mt-[1200px] sm:mt-32"
  >
    <div
      class="absolute sm:-top-[100px] -top-[50px] sm:-left-[200px] -left-[100px] sm:size-[450px] size-[250px]"
    >
      <img src="/public/resources/circle gradient bw.png" alt="tv" class="" />
    </div>
    <div
      class="absolute sm:-bottom-[100px] -bottom-[50px] sm:-right-[200px] -right-[100px] sm:size-[450px] size-[250px]"
    >
      <img src="/public/resources/circle gradient bw.png" alt="tv" class="" />
    </div>
    <div class="text-center w-full mt-20 text-pink-400 font-poppins font-bold">
      EXERCISE SKEPTICISM!
    </div>
    <div
      class="text-center sm:text-7xl text-3xl sm:w-1/2 w-full mx-auto text-black font-poppins font-bold"
    >
      Misinformation in the Digital Age
    </div>
    <div
      class="text-center sm:text-xl text-md sm:w-3/5 w-full mx-auto text-black font-poppins font-semibold"
    >
      In the so-called Information Age, social networking sites have become a notable agent for the
      spread of misinformation, fake news, and propaganda. Misinformation on social media spreads
      quickly in comparison to traditional media because of the lack of regulation and examination
      required before posting.
    </div>
    <div class="">
      <img
        src="/public/resources/tv-center.png"
        alt="tv"
        class="sm:mt-40 mt-80 inset-0 absolute -z-10"
      />
    </div>
  </div>
  <!-- Another section -->
  <HowToSpotSection/>
</template>
