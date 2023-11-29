let crsr = document.querySelector(".cursor");
let video = document.querySelector("video");
// let btn = document.querySelector("button")

document.body.addEventListener("mousemove", (dets) => {
  gsap.to(crsr, {
    left: dets.x + 10 + "px",
    top: dets.y + 10 + "px",
  });
});
let image = document.querySelectorAll(".elems");

image.forEach((value) => {
  value.addEventListener("mouseenter", () => {
    var att = value.getAttribute("data-image");
    crsr.style.width = "350px";
    crsr.style.height = "450px";
    crsr.style.borderRadius = "20px";
    crsr.style.backgroundImage = `url(${att})`;
  });

  value.addEventListener("mouseleave", () => {
    let att = value.getAttribute("data-image");
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none";

    // value.style.backgroundColor = "blue"
  });
});

// gsap.to(".loader",{
//   transform :"translateY(-100%)",
//   duration:10,
//   pin:true
//   // stagger:0.3,

// })

// gsap.to(".wrapperload #elem2",{
//   transform :"translateY(-100px)",
//   duration:2,
//   delay:1
//   // stagger:0.3,

// })

// gsap.to(".wrapperload #elem3",{
//   transform :"translateY(-100px)",
//   duration:2,
//   // stagger:0.3,

// })

video.addEventListener("mouseenter", () => {
  gsap.to(crsr, {
    scale: 5,
    // width: "90px",
    // height: "30px",
    // borderRadius: "20px",
  });
});

video.addEventListener("mouseleave", () => {
  gsap.to(crsr, {
    // width: "20px",
    // height: "20px",
    // borderRadius: "50%",
    scale:1,

  });
});

gsap.to(".page3", {
  backgroundColor: "#000",
  color: "#fff",
  duration: 1,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    // markers:true,
    start: "top 10% ",
    end: "top -20%",
    scrub: 2,
  },
});
