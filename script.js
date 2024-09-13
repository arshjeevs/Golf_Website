const cursor = document.querySelector('.cursor')
const cursor_blur = document.querySelector('.cursor-blur')
document.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x  + "px"
    cursor.style.top = dets.y  + "px"
    cursor_blur.style.left = dets.x - 250 + "px"
    cursor_blur.style.top = dets.y - 250 + "px"
})

gsap.to(".nav",{
    backgroundColor: "black",
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -25%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 2,
    }
})