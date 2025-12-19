<template>
  <canvas ref="canvasRef" class="rain-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
let ctx
let rafId

const drops = []
const BASE_COUNT = 300
let DPR = window.devicePixelRatio || 1

function resize() {
  const canvas = canvasRef.value
  const w = window.innerWidth
  const h = window.innerHeight

  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'

  canvas.width = w * DPR
  canvas.height = h * DPR

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
}

function initRain() {
  drops.length = 0
  const count = window.innerWidth < 768 ? 150 : BASE_COUNT

  for (let i = 0; i < count; i++) {
    drops.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      len: Math.random() * 12 + 6,
      speed: Math.random() * 1.5 + 1 // ⚠️ 明显可见的速度
    })
  }
}

function draw() {
  const canvas = canvasRef.value
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = 'rgba(255,255,255,0.25)'
  ctx.lineWidth = 1

  for (const d of drops) {
    ctx.beginPath()
    ctx.moveTo(d.x, d.y)
    ctx.lineTo(d.x + 3, d.y + d.len)
    ctx.stroke()

    d.y += d.speed

    if (d.y > window.innerHeight) {
      d.y = -20
      d.x = Math.random() * window.innerWidth
    }
  }

  rafId = requestAnimationFrame(draw)
}

onMounted(() => {
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')

  resize()
  initRain()
  draw()

  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resize)
})
</script>

<style>
/* ⚠️ 不要 scoped */
.rain-canvas {
  position: fixed;
  inset: 0;
  z-index: 0; /* 不要 -1，先确保可见 */
  pointer-events: none;
}
</style>
