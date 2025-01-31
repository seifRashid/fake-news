<script setup>
import SplineTest from '@/components/HomePage/SplineTest.vue';

import FirstTest from '@/components/HomePage/FirstTest.vue';
import VMyAnimation from '@/components/HomePage/ScrollAnimationTest/VMyAnimation.vue';
import WithGsap from '@/components/HomePage/ScrollAnimationTest/WithGsap.vue';
import SecondTest from '@/components/HomePage/SecondTest.vue';
import SlideInWithDelay from '@/components/HomePage/SlideInWithDelay.vue';

</script>
<template>
  <!-- First animation -->

  <FirstTest/>
  <SecondTest/>
  <WithGsap/>
  <SlideInWithDelay/>
   <VMyAnimation/>
   <SplineTest/>
</template>
