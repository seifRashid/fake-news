<template>
  <div class="h-screen flex flex-col items-center justify-center space-y-20">
    <div
      v-for="(item, index) in items"
      :key="index"
      :ref="(el) => (elements[index] = el)"
      class="opacity-0 transform transition-all duration-1000"
      :class="{
        'opacity-100 translate-y-0': item.isVisible,
        'translate-y-10': !item.isVisible,
      }"
    >
      <p class="text-4xl font-bold">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const elements = ref([]);
const items = ref([
  { text: 'First Element', isVisible: false },
  { text: 'Second Element', isVisible: false },
  { text: 'Third Element', isVisible: false },
]);

const handleScroll = () => {
  elements.value.forEach((el, index) => {
    if (el) {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        items.value[index].isVisible = true;
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
