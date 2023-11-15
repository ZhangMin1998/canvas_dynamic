const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')

function init() {
  cvs.width = window.innerWidth
  cvs.height = window.innerHeight
}
init()

ctx.beginPath()
ctx.moveTo(100, 50)
ctx.lineTo(200, 100)
// ctx.closePath() // 闭合
ctx.strokeStyle = 'rgb(200,200,200)'
ctx.stroke()
// ctx.fillStyle = '#fff'
// ctx.fill()

ctx.beginPath()
ctx.arc(100,50,6,0,2*Math.PI)
ctx.fillStyle = '#fff'
ctx.fill()
ctx.beginPath()
ctx.arc(200,100,6,0,2*Math.PI)
ctx.fillStyle = '#fff'
ctx.fill()