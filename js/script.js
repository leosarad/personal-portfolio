let cursor = document.getElementById('cursor')
let player = document.querySelector('#music');
let disc = document.querySelector(".disc")
let play = document.querySelector(".disc i")
let ripple = document.querySelectorAll(".ripple")

disc.onclick = (e)=>{
     if(player.paused){
          player.play()
          play.classList.replace('fa-play-circle', 'fa-pause-circle')
          ripple.forEach(item=>{
               item.style.animationPlayState = "running"
          })
     }
     else {
          player.pause()
          play.classList.replace('fa-pause-circle', 'fa-play-circle')
          ripple.forEach(item=>{
               item.style.animationPlayState = "paused"
          })
     }     
}
     

onmousemove = (e)=>{
     let tail = document.querySelectorAll(".tail div")
     let x = e.clientX
     let y = e.clientY
     moveHead(x,y)
     tail.forEach((item,i)=>{
          setTimeout(()=>{moveTail(item,x,y,(6-i))},100 * i)
     })

}
let wheel = 0
onwheel = (e)=>{
     console.log(e.wheelDeltaY)
     let body = document.querySelector("body")
     let content = document.querySelector(".content")
     // content.style.boxShadow = "0 0 3px 2px #202020"

     if(e.wheelDeltaY<0){
          content.scrollTop = content.scrollTop + 300
          content.style.boxShadow = "0 0 3px 2px #202020"
          body.style.backgroundColor = "#141414"
     }else {
          content.scrollTop = content.scrollTop - 300
          content.style.boxShadow = "none"
          body.style.backgroundColor = "#181818"
     }

}
let moveHead = (x,y)=>{
     let head = document.querySelector('#cursor .head')
     head.style.position = "absolute"
     head.style.left = `${x}px`
     head.style.top = `${y}px`
}
let moveTail = (tail,x,y,i)=>{
     tail.style.position = "absolute"
     tail.style.left = `${x+4}px`
     tail.style.top = `${y+4}px`
     tail.style.height = `${i*2}px`
     tail.style.width = `${i*2}px`
}