var coursor = document.querySelector(".coursor");
main.addEventListener("mousemove", function(dets){
    gsap.to(coursor, {
        x:dets.x,
        y:dets.y,
        duration:1,
    })
})

gsap.to(".navbar", {
  y: -100,
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "Body",
    // markers: true,
    start: "top -2%",
    end: "top -11%",
    scrub: 1,
  },
});

// multi card gsap 
gsap.utils.toArray(".benefit-card").forEach((card) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    scale: 0.95, // 🔥 Adds pop-up feel
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      scroller: "body",
      start: "top 85%",
      toggleActions: "play none none none", // Play once when it enters
    },
  });
});

// section-3 btn
const allProductsBtn = document.querySelector(".all-products-btn1");
const icon = allProductsBtn.querySelector("i");
const text = allProductsBtn.querySelector(".btn-text");

allProductsBtn.addEventListener("mouseenter", function () {
  icon.style.transform = "translateX(5px)";
  text.style.transform = "translateX(-5px)";
});

allProductsBtn.addEventListener("mouseleave", function () {
  icon.style.transform = "translateX(0)";
  text.style.transform = "translateX(0)";
});

// For .hero-button
const heroButton = document.querySelector(".hero-button");
const icon2 = heroButton.querySelector("i");
const text2 = heroButton.querySelector(".btn-text");

heroButton.addEventListener("mouseenter", function () {
  icon2.style.transform = "translateX(5px)";
  text2.style.transform = "translateX(-5px)";
});

heroButton.addEventListener("mouseleave", function () {
  icon2.style.transform = "translateX(0)";
  text2.style.transform = "translateX(0)";
});

// section-7
// Call button
const callButton = document.querySelector(".call-button");
const icon3 = callButton.querySelector("i");
const text3 = callButton.querySelector(".btn-text");

callButton.addEventListener("mouseenter", function () {
  icon3.style.transform = "translateX(5px)";
  text3.style.transform = "translateX(-5px)";
});

callButton.addEventListener("mouseleave", function () {
  icon3.style.transform = "translateX(0)";
  text3.style.transform = "translateX(0)";
});

// section2- multiple img
var minimg = document.querySelectorAll(".minimg");
minimg.forEach(function (e) {
  e.addEventListener("mouseenter", function (val) {
    e.style.transform = "scale(1.2)";
    e.style.transition = "transform 0.3s ease"; // Optional smooth animation
  });

  e.addEventListener("mouseleave", function (val) {
    e.style.transform = "scale(1)";
  });
});

// section-4 watch img

const image = document.querySelector(".section-4-image");
const button = document.querySelector(".buy-btn");

button.addEventListener("mouseenter", function () {
  image.style.transform = "scale(1.1)";
  image.style.transition = "transform 0.5s ease"; // smooth animation
});

button.addEventListener("mouseleave", function () {
  image.style.transform = "scale(1)";
});
