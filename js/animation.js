const logo = document.querySelector('#logo');
const navbar = document.querySelector('#navbar');
const navText = document.querySelectorAll('.nav-text');
const logoText = document.querySelectorAll('.logo-text');
const heroVideo = document.querySelector('#heroVideo');

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();


timeline.fromTo(logoText, {
    opacity: 1,
    y: -1000,
}, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'ease.inOut',
});


timeline.fromTo(navText, {
    opacity: 0,
    y: 20,
}, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
});

gsap.fromTo(heroVideo, {
    opacity: 0,
}, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
    ease: 'ease.inOut',
});

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
    y: 10,
}, {
    y: -358,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
        trigger: navbar,
        start: 'top 40%',
        end: 'bottom 20%',
        scrub: true,
    }
});
