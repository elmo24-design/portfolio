const hello = document.querySelector(".hello-inner");
const desc = document.querySelector(".desc-inner");
const landing = document.querySelector(".landing");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menuBtn");
const linkBtn = document.querySelector(".btn");

const tl = new TimelineMax();

tl.fromTo(landing, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
  .fromTo(hello, 1, { x: "-150%" }, { x: "0%", ease: Power2.easeInOut })
  .fromTo(
    logo,
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(desc, 1, { x: "150%" }, { x: "0%", ease: Power2.easeInOut }, "-=1")
  .fromTo(
    menuBtn,
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(
    header,
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(
    linkBtn,
    1,
    { opacity: 0, scale: "0.5" },
    { opacity: 1, scale: "0.9" }
  );
