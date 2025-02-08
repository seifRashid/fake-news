<script setup>
import { onMounted, ref } from 'vue'

const canvas1 = ref(null)
onMounted(() => {
  let canvasOne = canvas1.value

  canvasOne.width = window.innerWidth
  canvasOne.height = window.innerHeight

  let c = canvasOne.getContext('2d')

  //mouse object, it will hold the mouse coodinate
  let mouse = {
    x: undefined,
    y: undefined,
  }
  //mouse move event
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
    console.log(mouse)
  })

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
    let pie = Math.random() * 2 * Math.PI

    this.draw = function () {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, pie , false)
      c.strokeStyle = `rgba(${r},${g},${b},${a})`
      //stoke thickness
      c.lineWidth = thickNess
      c.stroke()
      c.fill()
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

      //interactivity of the mosue with the circle
      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < 40) {
          this.radius += 1
        }
      } else if (this.radius > 10) {
        this.radius -= 1
      }
      this.draw()
    }
  }

  let circleArray = []
  for (let i = 0; i < 300; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    let radius = Math.random() * 4 + 2
    let dx = Math.random() * 2
    let dy = Math.random() * 2
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
