<script setup>
import FirstAfterLP from '@/components/HomePage/FirstAfterLP.vue';
import LandingPage from '@/components/HomePage/LandingPage.vue'
import OurResources from '@/components/HomePage/OurResources.vue';
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.mainPg', { opacity: 0 })
})
</script>

<template>
  <main class="mainPg overflow-hidden">
    <div
      class="absolute w-full h-[5000px] flex flex-col bg-slate-900 pt-10 -z-10 top-0 overflow-y-hidden overflow-x-hidden"
    >
      <LandingPage />
      <!-- next section -->
      <div
        class="flex flex-col sm:flex-row items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 px-6 sm:ml-52 my-32"
      >
        <FirstAfterLP/>
      </div>
      <!-- Our Resources section -->
      <div
        class="flex flex-col items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 sm:mx-auto px-6 mt-60 sm:mt-32"
      >
        <OurResources/>
      </div>
    </div>
    <!-- Section after Our Resources -->
    <!-- <div
        class="h-[500px] bg-white flex flex-col items-center justify-start w-full sm:items-start gap-4 sm:justify-between sm:w-11/12 sm:mx-auto px-6 mt-60 sm:mt-32"
      ></div> -->
  </main>
</template>
