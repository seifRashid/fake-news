<script setup>
import { onMounted, ref } from 'vue'

const canvas1 = ref(null)
onMounted(() => {
  let canvasOne = canvas1.value

  canvasOne.width = window.innerWidth
  canvasOne.height = window.innerHeight

  let c = canvasOne.getContext('2d')

  // let y = Math.random() * window.innerHeight

  // let radius = Math.random() * 100

  // Create  circle object
  function Circle(x, y, radius, dx, dy) {
    this.x = x //x position
    this.y = y //y position
    this.dx = dx //x velocity
    this.dy = dy //y velocity
    this.radius = radius

    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let a = 1
    let thickNess = Math.random() * 20

    this.draw = function () {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
      c.strokeStyle = `rgba(${r},${g},${b},${a})`
      //stoke thickness
      c.lineWidth = thickNess
      c.stroke()
    }

    this.update = function () {
      //enable bouncing back when the circle is the edge of the screen
      //have added the radius/2 so as it can bounce exactly at the edge
      if (this.x + radius / 2 > canvasOne.width || this.x - this.radius / 2 < 0) {
        this.dx = -this.dx
      } else if (this.y + this.radius / 2 > canvasOne.height || this.y - this.radius / 2 < 0) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy
      this.draw()
    }
  }

  let circleArray = []
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    let radius = Math.random() * 50 + 10
    let dx = Math.random() * 5
    let dy = Math.random() * 5
    circleArray.push(new Circle(x, y, radius, dx, dy))
  }
  // let circle = new Circle(100, 100, 20, 10, 10)

  function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvasOne.width, canvasOne.height)
    // circle.update()
    circleArray.forEach((circle) => {
      circle.update()
    })
  }
  animate()
})
</script>
<template>
  <canvas ref="canvas1" class="mt-1 overflow-hidden"></canvas>
</template>
