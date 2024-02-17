var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end:"50% 50%",
    scrub:"true",
    // markers:"true"
}})

tl.to("#fanta",{
    top:"97%",
    left:"-27.5%",
    zIndex:"3"
},"anime1")
tl.to("#orange",{
    top: "165%",
    left:"80%",
    scale:"1.2",
},"anime1")
tl.to("#orange-slice",{
     top:"159%",
     left:"20%",
     rotate:"90deg",
     zIndex:"2",
     width:"24%"
 },"anime1")
 //87 40
 tl.to("#leaf",{
    top:"89%",
    left:"-8%",
    scale:"1",
    rotate:"125deg"
 },"anime1")
 tl.to("#leaf-coco",{
   top: "105%"
 },"anime1")

 var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true
 }})

 tl2.to("#orange-slice",{
    top:"212%",
    left:"38.5%",
    scale:"1.3",
    rotate:"180deg",
    zIndex:"2",
    width:"22%"
 },"anime2")
 tl2.to("#fanta",{
    top:"201%",
    left:"-0.2%",
    width: "20%",
    height: "49%",
    zIndex:"3",
    scale:"1.35"
 },"anime2")
//  tl2.to("#leaf",{
//    top : "270%",
//    rotate: "60deg",
//    left:"-10%"
// },"anime2")
tl2.from("#sprite",{
   left: "-120%",
   rotate: "-60deg"
},"anime2")
tl2.from("#pepsi",{
   left: "120%",
   rotate: "60deg"
},"anime2")
tl2.from("#card-lemon",{
   left: "-130%",
   rotate: "-120deg"
},"anime2")
tl2.from("#card-litchi",{
   left: "130%",
   rotate: "120deg"
},"anime2")