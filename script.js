// locomotive scrolltrigger
function smoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smoothScroll();




  // loader
  let tl = gsap.timeline()

  tl.from("#loader h3",{
    x: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  })
  tl.to("#loader h3",{
    x: -10,
    opacity: 0,
    stagger: 0.2
  })
  tl.to("#loader",{
    opacity: 0,
  })
  tl.to("#loader",{
    display: "none"
  })
  tl.from(".page1_head span",{
    y:150,
    opacity: 0,
    duration:1,
    stagger: 0.1
  })


// page 1
function cursor(){
    let cursor = document.querySelector(".cursor");
let page1All = document.querySelector(".page1_all");

page1All.addEventListener("mousemove",function(dets){
    
    //with GSAP
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y
    })
    

    // without GSAP
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
})

page1All.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1All.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })   
})

}
cursor();

/*
let clutter = " ";
 document.querySelector(".page1_head").textContent.split("").forEach(function(dets){
     clutter += `<span> ${dets} </span>`;
     document.querySelector(".page1_head").innerHTML = clutter;
 })
*/



// page 2

gsap.from(".page2_para_hide p",{
    y:120,
    stagger: 0.1,
    scrollTrigger: {
        scroller:"#main",
        trigger:"#page2",
        start:"top 50%",
        end:"top 35%",
        scrub: 3,
        // markers:true,    
    }
})



// page 4
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }


