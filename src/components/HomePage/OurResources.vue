<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);
onMounted(()=>{
  // Scroll-triggered animations for content blocks

    gsap.from('.box1', {
      scrollTrigger: {
        trigger: '.box1',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    });

    gsap.from('.box3', {
      scrollTrigger: {
        trigger: '.box3',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    });

})
</script>
<template>
  <div
          class="box text-center text-pink-400 text-5xl mb-16 sm:text-7xl w-full font-black font-poppins"
        >
          Our Resources
        </div>
        <div
          class="w-full h-[480px] sm:flex sm:flex-row flex-col sm:space-x-8 space-y-8 items-center sm:justify-between sm:items-start"
        >
          <div class="box1 sm:w-1/3 w-full border-2 h-full overflow-hidden">
            <div class="flex-col">
              <div class="flex w-full sm:h-76 h-[300px]">
                <img src="/public/resources/magazine1.png" class="w-full" alt="" />
              </div>
              <div class="bg-pink-400 h-[180px] flex-col p-8 sm:p-6">
                <p class="font-bold text-white text-xl">LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">
                  DISCOVER
                </div>
              </div>
            </div>
          </div>
          <div class="sm:w-1/3 w-full flex flex-col sm:flex-col gap-8">
            <div class="w-full h-[252px] sm:h-[222px] flex-col sm:-mt-8 border-2">
              <div class="h-[180px] sm:h-[150px] overflow-hidden object-cover">
                <img src="/public/resources/magazine2.png" class="w-full" alt="" />
              </div>
              <div
                class="bg-pink-400 h-[68px] py-1 px-4 text-white text-sm font-bold flex gap-2 justify-between items-center"
              >
                <p>LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">
                  DISCOVER
                </div>
              </div>
            </div>
            <div class="w-full h-[252px] sm:h-[222px] flex-col border-2">
              <div class="h-[180px] sm:h-[150px] overflow-hidden object-cover">
                <img src="/public/resources/magazine3.png" class="w-full" alt="" />
              </div>
              <div
                class="bg-pink-400 h-[68px] py-1 px-4 text-white text-sm font-bold flex gap-2 justify-between items-center"
              >
                <p>LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">
                  DISCOVER
                </div>
              </div>
            </div>
          </div>
          <div class="box3 sm:w-1/3 w-full flex flex-col sm:flex-col gap-8">
            <div class="w-full h-[252px] sm:h-[222px] flex-col sm:-mt-8 border-2">
              <div class="h-[180px] sm:h-[150px] overflow-hidden object-cover">
                <img src="/public/resources/magazine4.png" class="w-full" alt="" />
              </div>
              <div
                class="bg-pink-400 h-[68px] py-1 px-4 text-white text-sm font-bold flex gap-2 justify-between items-center"
              >
                <p>LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">
                  DISCOVER
                </div>
              </div>
            </div>
            <div class="w-full h-[252px] sm:h-[222px] flex-col border-2">
              <div class="h-[180px] sm:h-[150px] overflow-hidden object-cover">
                <img src="/public/resources/magazine.png" class="w-full" alt="" />
              </div>
              <div
                class="bg-pink-400 h-[68px] py-1 px-4 text-white text-sm font-bold flex gap-2 justify-between items-center"
              >
                <p>LOREM IPSUM DOLA SIT AMET</p>
                <div class="bg-white text-pink-400 text-sm font-bold text-center p-3 w-1/2 mt-3">
                  DISCOVER
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

