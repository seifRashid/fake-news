<script setup>
import AfterOurResources from '@/components/HomePage/AfterOurResources.vue'
import FirstAfterLP from '@/components/HomePage/FirstAfterLP.vue'
import LandingPage from '@/components/HomePage/LandingPage.vue'
import OurResources from '@/components/HomePage/OurResources.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'



onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.mainPg', { opacity: 0 })

  const tran = gsap.timeline()
  tran.to('.trans1', {y:window.innerHeight,opacity:0, duration:1, ease:'back.in'},1)
      .to('.trans2', {y:window.innerHeight,opacity:0, duration:1, ease:'back.in'},2)
      .to('.trans3', {y:window.innerHeight,opacity:0, duration:1, ease:'back.in'},3)
      .to('.trans4', {y:window.innerHeight,opacity:0, duration:1, ease:'back.in'},4)
      .to('.trans5', {y:window.innerHeight,opacity:0, duration:1, ease:'back.in'},)
      .to('.ficha', {hidden:true}, '<')
})
</script>

<template>
  <main class="mainPg overflow-hidden">
    <!-- <div class="absolute ficha flex w-full h-screen inset-0 justify-start overflow-hidden">
      <div class="trans1 h-screen bg-black w-1/5"></div>
      <div class="trans2 h-screen bg-black w-1/5"></div>
      <div class="trans3 h-screen bg-black w-1/5"></div>
      <div class="trans4 h-screen bg-black w-1/5"></div>
      <div class="trans5 h-screen bg-black w-1/5"></div>
    </div> -->
    <div
      class="absolute w-full h-[5000px] flex flex-col bg-slate-900 pt-10 -z-10 top-0 overflow-y-hidden overflow-x-hidden"
    >
      <LandingPage />
      <!-- next section -->
      <div
        class="flex flex-col sm:flex-row items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 px-6 sm:ml-52 sm:my-32 mb-32"
      >
        <FirstAfterLP />
      </div>
      <!-- Our Resources section -->
      <div
        class="flex flex-col items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 sm:mx-auto px-6 mt-60 sm:mt-32"
      >
        <OurResources />
      </div>
      <!-- Section after Our Resources -->
      <AfterOurResources />
    </div>
  </main>
</template>
