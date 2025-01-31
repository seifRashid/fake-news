<script setup>
import { Application } from '@splinetool/runtime'
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('canvas3d')
  const app = new Application(canvas)
  // app.load('https://prod.spline.design/tTnjOO73At1kWVDp/scene.splinecode')
  app.load('https://prod.spline.design/3930jhp5Q6Pwn86i/scene.splinecode')
})
</script>
<template>
  <canvas id="canvas3d"></canvas>
</template>
