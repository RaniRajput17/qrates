// gsap.to("#page11",{
//     repeat:-1,
//     x:-100,
//     duration:2,
//     ease:linear
// })

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


gsap.to("#page11>h2",{
  duration:8,
  repeat:-1,
  ease:Power0.easeNone, 
  x: -500
})
gsap.to("#page112>h2",{
  duration:8,
  repeat:-1,
  ease:Power0.easeNone, 
  x: -500
})



gsap.from("#page1 h1",{
    x:-70,
    duration:2,
})
gsap.from("#page1 #why",{
    x:-70,
    duration:2,
})
gsap.from("#page1 p",{
    x:-70,
    duration:2,
})

document.querySelector("#c22").addEventListener("click",function(){
  document.querySelector("#s2 #s22").style.display="initial";
  document.querySelector("#c22").style.backgroundColor="black";
  document.querySelector("#c22").style.color="white";
  document.querySelector("#c11").style.backgroundColor="white";
  document.querySelector("#c11").style.color="black";
  document.querySelector("#s1 #s2p").style.display="initial";
  document.querySelector("#s1 #s1p").style.display="none";
  document.querySelector("#page12 #s1").style.backgroundColor="orange";
})
document.querySelector("#c11").addEventListener("click",function(){
  document.querySelector("#s2 #s22").style.display="none";
  document.querySelector("#c11").style.backgroundColor="black";
  document.querySelector("#c11").style.color="white";
  document.querySelector("#c22").style.backgroundColor="white";
  document.querySelector("#c22").style.color="black";
  document.querySelector("#s1 #s2p").style.display="none";
  document.querySelector("#s1 #s1p").style.display="initial";
  document.querySelector("#page12 #s1").style.backgroundColor="rgb(248, 248, 60)";
})