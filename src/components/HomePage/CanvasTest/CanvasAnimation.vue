<script setup>
import { onMounted, ref } from 'vue'

const canvas1 = ref(null)
onMounted(() => {
  let canvasOne = canvas1.value

  canvasOne.width = window.innerWidth
  canvasOne.height = window.innerHeight

  let c = canvasOne.getContext('2d')

  //rectangles
  // for (let i = 0; i < 10; i++) {
  //   let x = Math.random() * window.innerWidth
  //   let y = Math.random() * window.innerHeight - 100
  //   let length = Math.random() * 500
  //   let width = Math.random() * 500
  //   let r = Math.random() * 255
  //   let g = Math.random() * 255
  //   let b = Math.random() * 255
  //   let a = Math.random() * 0.9 * 2

  //   c.fillStyle = `rgba(${r},${g},${b},${a})`
  //   c.fillRect(x, y, length, width)
  // }

  //Path
  // c.beginPath()
  // c.moveTo(100, 200)
  // c.lineTo(300, 300)
  // c.lineTo(400, 400)
  // c.strokeStyle = 'rgba(255,0,0,0.8)'
  // c.stroke()

  //arc
  // for (let i = 0; i < 20; i++) {

  // }

  let x = 10
  let velocity = 4

  function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvasOne.width, canvasOne.height)

    let y = Math.random() * window.innerHeight
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let a = Math.random() * 0.9 * 2
    let radius = Math.random()*100

    c.beginPath()
    c.arc(x, y, radius, 0, 2 * Math.PI, false)
    c.strokeStyle = `rgba(${r},${g},${b},${a})`
    c.stroke()

    if(x > canvasOne.width){
      velocity = -velocity
    } else if (x < canvasOne.width){
      velocity = +velocity
    }
    x += velocity
  }
  animate()
})
</script>
<template>
  <canvas ref="canvas1" class="mt-1 overflow-hidden"></canvas>
</template>
