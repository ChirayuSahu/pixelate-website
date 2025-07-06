const logo = document.querySelector('#logo');
const navbar = document.querySelector('#navbar');
const navText = document.querySelectorAll('.nav-text');
const logoText = document.querySelectorAll('.logo-text');
const heroVideo = document.querySelector('#heroVideo');
const verticalLines = document.querySelectorAll('.vertical-lines');

gsap.registerPlugin(ScrollTrigger, SplitText);

const timeline = gsap.timeline();

timeline.fromTo(verticalLines, {
    y: -1500,
}, {
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'ease.inOut',
});

logoText.forEach((text, index) => {
  timeline.fromTo(
    text,
    {
      opacity: 0,
      y: index % 2 === 0 ? -100 : 100,
      scale: 0.8,
      rotate: index % 2 === 0 ? -10 : 10,
      skewY: 10,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      skewY: 0,
      filter: 'blur(0px)',
      duration: 0.6,
      ease: 'back.out(1.7)',
    },
    index * 0.1
  );
});




timeline.fromTo(navText, {
    opacity: 0,
    y: 20,
}, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
}, "=-1.25");

gsap.fromTo(logo,
    {
        scale: 1,
        y: 0,
    },
    {
        scale: 0.17,
        y: -120,
        duration: 1,
        ease: 'linear',
        scrollTrigger: {
            trigger: logo,
            start: 'top 0%',
            end: 'bottom 10%',
            scrub: true,
        }
    }
);

gsap.fromTo(navbar, {
    y: -20,
}, {
    y: -358,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
        trigger: navbar,
        start: 'top 35%',
        end: 'bottom 20%',
        scrub: true,
    }
});

const split = new SplitText("#heroPara", { type: "lines" });

timeline.fromTo(split.lines, {
    x: 100,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out",
}, "=-1");

const sticeker1 = document.querySelector('#sticker-1');

timeline.fromTo(sticeker1, {
    x: -1000,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'ease.inOut',
}, "=-1.5");

