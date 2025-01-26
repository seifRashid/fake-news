<template>
  <div class="relative">
    <!-- Hero Section -->
    <header class="bg-indigo-600 text-white text-center py-16">
      <h1 ref="heroTitle" class="text-4xl font-bold">Welcome to GSAP Animation</h1>
      <p ref="heroDescription" class="text-lg mt-4">Scroll down to see the magic!</p>
      <div ref="mouse" class="text-start cursor-pointer absolute"></div>
      <div ref="mouse" class="text-start cursor-pointer absolute"></div>
    </header>

    <!-- Animated Circle -->
    <div
      ref="circle"
      class="fixed top-1/2 left-1/2 w-12 h-12 bg-red-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
    ></div>

    <!-- Content Section -->
    <main class="py-12">
      <section
        v-for="(item, index) in items"
        :key="index"
        class="bg-gray-100/60 mx-auto my-6 p-6 rounded-lg shadow-lg max-w-3xl"
        ref="contentBlocks"
      >
        <h2 class="text-2xl font-semibold">Content Block {{ index + 1 }}</h2>
        <p class="mt-4">Some description for block {{ index + 1 }}. Keep scrolling!</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const heroTitle = ref(null)
const heroDescription = ref(null)
const contentBlocks = ref([])
const circle = ref(null)

// Dummy data for content blocks
const items = Array.from({ length: 15 }, (_, i) => `Block ${i + 1}`)
const mouse = ref(null)

onMounted(() => {
  let textContent = 'Rashid Seif Mwaga'
  // Split text with a for loop
  for (let i = 0; i < textContent.length; i++) {
    let span = document.createElement('span')
    span.classList.add('text')
    span.style.setProperty('--i', i + 1)
    span.style.left = i * 14 + 'px'
    span.textContent = textContent[i]
    console.log('hello')
    mouse.value.appendChild(span)
  }

  // animations on mouse move
  window.addEventListener('mousemove',updateMousePosition)

  function updateMousePosition(e){
    gsap.to('.text', {
      x: e.clientX,
      y: e.clientY-210,
      stagger:0.04,
      ease: 'back',
    })
  }
  // document.addEventListener('mousemove', e=>{
  // function moveTo(e){
  //   console.log('mouse moved')
  //   gsap.to('.text', {
  //     x: e.clientX,
  //     y: e.clientY,
  //   })
  // }
  // })

  // Hero Section Animation
  gsap.from([heroTitle.value, heroDescription.value], {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  })

  // Scroll-triggered animations for content blocks
  contentBlocks.value.forEach((block, index) => {
    gsap.from(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 100,
      duration: 1,
      delay: index * 0.2,
      ease: 'power2.out',
    })
  })

  // Circle animation on scroll
  gsap.to(circle.value, {
    scrollTrigger: {
      trigger: '.content-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        // Adjust the circle's size and color based on scroll progress
        const scale = 1 + self.progress * 4 // Scale factor
        const color = `hsl(${self.progress * 360}, 70%, 50%)` // Dynamic color
        gsap.set(circle.value, { scale, backgroundColor: color })
      },
    },
    duration: 1,
  })
})
</script>

<style>
/* No custom styles needed since we're using Tailwind CSS */
.text {
  position: absolute;
}
</style>
