<script setup>
import LandingPage from '@/components/HomePage/LandingPage.vue'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.mainPg', { opacity: 0 })
})
</script>

<template>
  <main class="mainPg overflow-hidden">
    <LandingPage />
    <!-- section after landing page -->
  </main>
</template>
