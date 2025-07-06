const logo = document.querySelector('#logo');
const navbar = document.querySelector('#navbar');
const navText = document.querySelectorAll('.nav-text');

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

timeline.fromTo(logo, {
    opacity: 0,
    y: 20,
}, {
    opacity: 1,
    y: 0,
    duration: 0.5,
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

gsap.fromTo(logo, 
    { 
        scale: 1,
        y: 0,
     },
    { 
        scale: 0.1,
        y: -150,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: logo,
            start: 'top 0%',
            end: 'bottom 20%',
            scrub: true,
        }
    }
);

gsap.fromTo(navbar, {
    y: 10,
}, {
    y: -358,
    duration: 4,
    ease: 'power2.inOut',
    scrollTrigger: {
        trigger: navbar,
        start: 'top 40%',
        end: 'bottom 20%',
        scrub: true,
    }
});
