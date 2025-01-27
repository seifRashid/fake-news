<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const animatedElement = ref(null);
const isVisible = ref(false);

const handleScroll = () => {
  if (animatedElement.value) {
    const elementTop = animatedElement.value.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger animation when the element is in the viewport
    if (elementTop < windowHeight * 0.75) {
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div
      ref="animatedElement"
      class="opacity-0 transition-opacity duration-1000"
      :class="{ 'opacity-100': isVisible }"
    >
      <p class="text-4xl font-bold">Scroll Down to See Me!</p>
    </div>
  </div>
</template>

