// 画了两个小圆
// const cvs = document.querySelector('canvas')
// const ctx = cvs.getContext('2d')

// function init() {
//   cvs.width = window.innerWidth
//   cvs.height = window.innerHeight
// }
// init()

// ctx.beginPath()
// ctx.moveTo(100, 50)
// ctx.lineTo(200, 100)
// // ctx.closePath() // 闭合
// ctx.strokeStyle = 'rgb(200,200,200)'
// ctx.stroke()
// // ctx.fillStyle = '#fff'
// // ctx.fill()

// ctx.beginPath()
// ctx.arc(100,50,6,0,2*Math.PI)
// ctx.fillStyle = '#fff'
// ctx.fill()
// ctx.beginPath()
// ctx.arc(200,100,6,0,2*Math.PI)
// ctx.fillStyle = '#fff'
// ctx.fill()

const cvs = document.querySelector('canvas')
    const ctx = cvs.getContext('2d')

    function init() {
      cvs.width = window.innerWidth
      cvs.height = window.innerHeight
    }
    init()

    // 获取[min, max]范围内的随机整数
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max-min + 1) + min)
    }

    class Point{
      constructor(){
        this.r = 6
        this.x = getRandomInt(0, cvs.width - this.r/2)
        this.y = getRandomInt(0, cvs.height - this.r/2)
      }
      draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,6,0,2*Math.PI)
        ctx.fillStyle = 'rgb(200,200,200)'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.x,this.y,6,0,2*Math.PI)
        ctx.fillStyle = 'rgb(200,200,200)'
        ctx.fill()
      }
    }
    class Graph{
      constructor(pointNumber = 30){
        this.points = new Array(pointNumber).fill(0).map(() => new Point())
      }
      draw(){
        for(let i = 0; i < this.points.length; i++) {
          const p1 = this.points[i]
          p1.draw()
          for(let j = i + 1; j < this.points.length; j++) {
            const p2 = this.points[j]
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.closePath()
            ctx.strokeStyle = 'rgb(200,200,200)'
            ctx.stroke()
          }
        }
      }
    }
    const g = new Graph()
    g.draw()