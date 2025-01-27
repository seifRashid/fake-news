<script setup>
import { onMounted, ref } from 'vue';


const elements = ref([])
const isVisible = ref(false)

const hundleAnimation=()=>{
  if(elements.value){
    elements.value.forEach(el => {
      const elementTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        isVisible.value = true;
      }
    });
  }
}

onMounted(()=>{
  window.addEventListener('scroll', hundleAnimation)
})

</script>
<template>
  <div ref="elements" class="font-bold text-4xl h-screen flex flex-col space-y-6 items-center justify-center">
    <h1 class="opacity-0 transform"
    :class="{ 'opacity-100 translate-y-10': isVisible }">My Name is</h1>
    <h1 class="" v-show="isVisible" >Rashid</h1>
  </div>
</template>
