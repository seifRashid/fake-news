<template>
  <div class="h-screen flex flex-col items-center justify-center space-y-20">
    <!-- Slide in from the left with delay -->
    <div
      v-for="(item, index) in items"
      :key="index"
      :ref="(el) => (elements[index] = el)"
      class="opacity-0 transform transition-all duration-1000"
      :class="{
        'opacity-100 translate-x-0 scale-100': item.isVisible,
        '-translate-x-10 scale-90': !item.isVisible,
      }"
      :style="`transition-delay: ${index * 200}ms;`"
    >
      <p class="text-4xl font-bold">{{ item.text }}</p>
    </div>

    <!-- Slide in from the right with delay -->
    <div
      v-for="(item, index) in itemsRight"
      :key="index + items.length"
      :ref="(el) => (elementsRight[index] = el)"
      class="opacity-0 transform transition-all duration-1000"
      :class="{
        'opacity-100 translate-x-0 scale-100': item.isVisible,
        'translate-x-10 scale-90': !item.isVisible,
      }"
      :style="`transition-delay: ${index * 200}ms;`"
    >
      <p class="text-4xl font-bold">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Elements sliding in from the left
const elements = ref([]);
const items = ref([
  { text: 'Slide In Left 1', isVisible: false },
  { text: 'Slide In Left 2', isVisible: false },
  { text: 'Slide In Left 3', isVisible: false },
]);

// Elements sliding in from the right
const elementsRight = ref([]);
const itemsRight = ref([
  { text: 'Slide In Right 1', isVisible: false },
  { text: 'Slide In Right 2', isVisible: false },
  { text: 'Slide In Right 3', isVisible: false },
]);

const handleScroll = () => {
  // Check visibility for left-sliding elements
  elements.value.forEach((el, index) => {
    if (el) {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        items.value[index].isVisible = true;
      }
    }
  });

  // Check visibility for right-sliding elements
  elementsRight.value.forEach((el, index) => {
    if (el) {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        itemsRight.value[index].isVisible = true;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
