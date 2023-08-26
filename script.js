var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y- 200 + "px"
})

// var h4 = document.querySelectorAll("#nav h4")
// h4.forEach(function(elem){
//      elem.addEventListener("mouseenter",function(){
//        crsr.style.scale = 3.5
//        crsr.style.border = "0.1px solid #fff"
//        crsr.style.backgroundColor = "transparent"

//     })

//     elem.addEventListener("mouseleave",function(){
//       crsr.style.scale = 1
//       crsr.style.border = "0px solid #95C11E"
//       crsr.style.backgroundColor = "#95C11E"

//    })
// })



gsap.to("#nav",{
  backgroundColor:"#000",
  duration:1,
  height:"110px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"-11%", 
    scrub:2
  }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      start:" top -25%",
      end:"top -70%",
      scrub:2
   }
})

gsap.from("#about img,#about-in",{
   y:50,
   opacity:0,
   duration:1,
   stagger:0.4,
   scrollTrigger:{
     trigger:"#about",
     scroller:"body",
     start:"top 70%",
     end:"top 65%" ,
     scrub:3 
   }
 })

 gsap.from("#colon1",{
  x:-70,
  y:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 47%",
    scrub:4
    }
  
})

gsap.from("#colon2",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 47%",
    scrub:4
    }
  
})