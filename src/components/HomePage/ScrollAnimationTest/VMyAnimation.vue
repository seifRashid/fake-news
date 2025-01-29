<script setup>
// import gsap from 'gsap';
import { onMounted, ref } from 'vue'

const element = ref(null)
const isVisible = ref(false)

const hundleAnimation = () => {
  const elementTop = element.value.getBoundingClientRect().top;
  const vh = window.innerHeight;

  if(elementTop < vh * 0.75){
    isVisible.value = true
    // if(isVisible.value){
    //   gsap.from('.try', {x:-50,duration:2})
    // }
  }
}

onMounted(() => {
  window.addEventListener('scroll', hundleAnimation)
})
</script>
<template>
  <div class="font-bold text-4xl h-screen flex flex-col space-y-6 items-center justify-center">
    <h1
    ref="element"
    class="opacity-0 transition-all translate-x-[200px] duration-1000 transform"
    :class="{
        'opacity-100 translate-x-[0px]': isVisible,
      }"
    >My name is Rashid Seif</h1>
    <div class="bg-green-500 rounded-md font-semibold py-1 px-2 transition-all duration-1000 ease-in-out transform hover:bg-green-600 hover:scale-110 cursor-pointer text-white">Hover me</div>
  </div>
</template>
