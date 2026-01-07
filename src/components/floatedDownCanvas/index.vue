<template>
  <!--全局特效canvas组件-->
  <canvas ref="canvasRef" class="rain-canvas" v-show="isShow"></canvas>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue'
import {useTheme} from "vuetify";

const isShow = ref(true)
import {getCurrentInstance} from 'vue';
// mitt bus
const {emitter} = getCurrentInstance()!.appContext.config.globalProperties;
emitter.on('isShow', (data) => {
  isShow.value = data
  console.log(isShow.value)
});


// 定义 props：接收 SVG 图片路径或 SVG 字符串
const props = defineProps({
  // SVG 图片的路径（URL）或 SVG 字符串，如果不提供则使用默认的线条图案
  svgPath: {
    default: null
  },
  svgType: {
    type: String,
    default: null
  },

  // SVG 图片的宽度（像素）
  svgWidth: {
    type: Number,
    default: 20
  },
  svgNum: {
    type: Number,
    default: 20
  }, svgSpeed: {
    type: Number,
    default: 0.75
  },
  // SVG 图片的高度（像素）
  svgHeight: {
    type: Number,
    default: 20
  },
  svgAlpha: {
    default: 0.75
  }
})

const theme = useTheme()
const canvasRef = ref(null)
// 存储 canvas 的 2D 渲染上下文，用于绘制图形
let ctx
// 存储 requestAnimationFrame 返回的 ID，用于取消动画循环
let rafId
// 存储加载好的 SVG 图片对象，用于在 canvas 上绘制
let svgImage = null

// 存储所有图案的数组，每个图案包含位置、长度、速度等信息
const drops = []
// 基础svg数量常量
let BASE_COUNT = props.svgNum
if (!props.svgPath) {
  BASE_COUNT = 300
}

// 获取设备像素比（DPR），用于高分辨率屏幕的清晰渲染，默认为 1
let DPR = window.devicePixelRatio || 1

// 调整 canvas 尺寸的函数，在窗口大小改变时调用
function resize() {
  //  canvas DOM
  const canvas = canvasRef.value
  // 当前窗口的宽度（像素）
  const w = window.innerWidth
  // 当前窗口的高度（像素）
  const h = window.innerHeight

  //  canvas 画布大小
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'

  // 设置 canvas 的实际绘制参数
  canvas.width = w * DPR
  canvas.height = h * DPR

  // 设置 canvas 的变换矩阵，缩放 DPR 倍，确保绘制内容与显示尺寸匹配
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
}

// 加载 SVG 图片的函数，将 SVG 转换为 Image 对象
async function loadSvgImage() {
  // 如果没有提供 SVG 路径，直接返回，使用默认的线条绘制
  if (!props.svgPath) {
    svgImage = null
    return
  }

  try {
    // 如果 SVG 路径是 data URI 格式，直接使用
    // noinspection TypeScriptUnresolvedReference
    if (props.svgPath.startsWith('data:')) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        // noinspection TypeScriptValidateTypes
        img.src = props.svgPath
        img.onload = () => {
          svgImage = img
          resolve(img)
        }
        img.onerror = reject
      })
    }

    // 对于 URL 路径，使用 fetch 加载 SVG 内容，然后转换为 data URI
    // 这样可以避免跨域问题和路径问题
    const response = await fetch(props.svgPath)
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`)
    }

    // 获取 SVG 文件内容
    const svgText = await response.text()

    // 将 SVG 内容转换为 data URI
    const svgDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`

    // 创建 Image 对象并加载
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = svgDataUri
      img.onload = () => {
        svgImage = img
        console.log('SVG 图片加载成功')
        resolve(img)
      }
      img.onerror = (error) => {
        console.error('SVG 图片加载失败:', error)
        svgImage = null
        reject(error)
      }
    })
  } catch (error) {
    console.error('加载 SVG 时出错:', error)
    svgImage = null
    throw error
  }
}

// 初始化数组的函数，创建所有对象
function initRain() {
  // 清空现有的数组，重新开始
  drops.length = 0
  // 根据屏幕宽度决定图案数量：移动端（<768px）用 150 个，桌面端用 300 个
  const count = window.innerWidth < 768 ? 15 : BASE_COUNT
  // 循环创建指定数量
  for (let i = 0; i < count; i++) {
    // 向数组添加一个新的图案对象
    drops.push({
      // 初始 x 坐标
      x: Math.random() * window.innerWidth,
      // 初始 y 坐标
      y: Math.random() * window.innerHeight,
      // 图案的长度
      len: Math.random() * 12 + 6,
      // 图案的下落速度
      speed: props.svgSpeed,
      // 图案的旋转角度
      rotation: Math.random() * 360
    })
  }
}

// 绘制函数，每一帧都会调用，实现动画效果
function draw() {
  // 获取 canvas DOM 元素
  const canvas = canvasRef.value

  const w = window.innerWidth
  // 当前窗口的高度（像素）
  const h = window.innerHeight

  //  canvas 画布大小
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  // 清空整个 canvas 画布，清除上一帧绘制的内容
  ctx.clearRect(0, 0, w, h)

  // 如果 SVG 图片已加载，使用图片模式绘制
  if (svgImage) {
    // 设置全局透明度，让 SVG 图片有半透明效果
    ctx.globalAlpha = props.svgAlpha

    // 遍历绘制
    for (const d of drops) {
      // 保存当前 canvas 状态（用于后续恢复）
      ctx.save()

      // 将绘制原点移动到图案的位置
      ctx.translate(d.x, d.y)
      // 旋转图片（可选，让图案有旋转效果）
      ctx.rotate((d.rotation * Math.PI) / 180)

      // 在 canvas 上绘制 SVG 图片，居中绘制
      ctx.drawImage(
          svgImage,
          -props.svgWidth / 2,  // x 坐标（居中）
          -props.svgHeight / 2, // y 坐标（居中）
          props.svgWidth,        // 图片宽度
          props.svgHeight        // 图片高度
      )

      // 恢复 canvas 状态
      ctx.restore()

      // 更新y坐标，使其向下移动（速度越快，移动越多）
      d.y += d.speed

      // 如果图案已经落到屏幕底部以下
      if (d.y > window.innerHeight) {
        // 将图案重置到屏幕顶部上方 20 像素的位置（从上方重新开始下落）
        d.y = -20
        // 随机分配一个新的 x 坐标，让图案从不同位置重新开始
        d.x = Math.random() * window.innerWidth
        // 随机分配一个新的旋转角度
        d.rotation = Math.random() * 360
      }
    }
    // 恢复全局透明度
    ctx.globalAlpha = 1.0
  } else {
    // 如果没有 SVG 图片，使用默认的线条模式绘制
    // 根据当前主题模式设置图案颜色：暗色模式用白色，亮色模式用深灰色
    if (theme.global.current.value.dark) {
      // 暗色模式下使用白色半透明（透明度 0.25）
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'
    } else {
      // 亮色模式下使用深灰色半透明（透明度 0.25）
      ctx.strokeStyle = 'rgba(58,58,58,0.25)'
    }

    // 设置线条宽度为 1 像素
    ctx.lineWidth = 1

    // 遍历所有图案，绘制每一滴雨
    for (const d of drops) {
      // 开始绘制新路径
      ctx.beginPath()
      // 将画笔移动到图案的起始位置（x, y）
      ctx.moveTo(d.x, d.y)
      // 从起始位置画线到结束位置，向右偏移 3 像素，向下延伸 len 长度，形成图案的斜线
      ctx.lineTo(d.x + 3, d.y + d.len)
      // 实际绘制这条路径（描边）
      ctx.stroke()

      // 更新图案的 y 坐标，使其向下移动（速度越快，移动越多）
      d.y += d.speed

      // 如果图案已经落到屏幕底部以下
      if (d.y > window.innerHeight) {
        // 将图案重置到屏幕顶部上方 20 像素的位置（从上方重新开始下落）
        d.y = -20
        // 随机分配一个新的 x 坐标，让图案从不同位置重新开始
        d.x = Math.random() * window.innerWidth
      }
    }
  }

  // 请求下一帧动画，形成循环，实现连续的动画效果，并保存返回的 ID
  rafId = requestAnimationFrame(draw)
}

// 组件挂载时的生命周期钩子，初始化 canvas 和开始动画
onMounted(async () => {
  // 获取 canvas DOM 元素
  const canvas = canvasRef.value
  // 获取 canvas 的 2D 渲染上下文，用于后续绘制操作
  ctx = canvas.getContext('2d')

  // 调整 canvas 尺寸以适应窗口大小
  resize()

  // 如果提供了 SVG 路径，先加载 SVG 图片
  if (props.svgPath) {
    await loadSvgImage()
  }

  // 初始化图案数组，创建所有图案对象
  initRain()
  // 开始绘制循环，启动动画
  draw()

  // 监听窗口大小改变事件，当窗口大小变化时重新调整 canvas 尺寸
  window.addEventListener('resize', resize)
})

// 组件卸载前的生命周期钩子，清理资源，防止内存泄漏
onBeforeUnmount(() => {
  // 取消动画帧请求，停止动画循环
  cancelAnimationFrame(rafId)
  // 移除窗口大小改变事件监听器，清理事件绑定
  window.removeEventListener('resize', resize)
})
</script>

<style>
.rain-canvas {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}
</style>
