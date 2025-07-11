// Make sure GSAP, ScrollTrigger, and SplitText are loaded in HTML
gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 768px)": function () {
    runAnimations({
      logoScale: 0.17,
      logoY: -120,
      navbarY: -358,
      verticalLineY: -1500,
      stickerX: -1000,
    });
  },

  // Mobile
  "(max-width: 767px)": function () {
    runAnimations({
      logoScale: 0.3,
      logoY: -45,
      navbarY: -220,
      verticalLineY: -800,
      stickerX: -400,
    });
  }
});

function runAnimations({ logoScale, logoY, navbarY, verticalLineY, stickerX }) {
  const logo = document.querySelector('#logo');
  const navbar = document.querySelector('#navbar');
  const navText = document.querySelectorAll('.nav-text');
  const logoText = document.querySelectorAll('.logo-text');
  const verticalLines = document.querySelectorAll('.vertical-lines');
  const sticker1 = document.querySelector('#sticker-1');

  // SplitText
  const split = new SplitText("#heroPara", { type: "lines" });

  const timeline = gsap.timeline();

  // Animate vertical lines
  timeline.fromTo(verticalLines, {
    y: verticalLineY,
  }, {
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'ease.inOut',
  });

  // Animate logoText
  logoText.forEach((text, index) => {
    timeline.fromTo(text, {
      opacity: 0,
      y: index % 2 === 0 ? -100 : 100,
      scale: 0.8,
      rotate: index % 2 === 0 ? -10 : 10,
      skewY: 10,
      filter: 'blur(10px)',
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      skewY: 0,
      filter: 'blur(0px)',
      duration: 0.6,
      ease: 'back.out(1.7)',
    }, index * 0.1);
  });

  // Animate nav text
  timeline.fromTo(navText, {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
  }, "=-1.25");

  // ScrollTrigger: Logo scaling
  gsap.fromTo(logo, {
    scale: 1,
    y: 0,
  }, {
    scale: logoScale,
    y: logoY,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
      trigger: logo,
      start: 'top 0%',
      end: 'bottom 10%',
      scrub: true,
    }
  });

  // ScrollTrigger: Navbar move up
  gsap.fromTo(navbar, {
    y: -20,
  }, {
    y: navbarY,
    duration: 1,
    ease: 'linear',
    scrollTrigger: {
      trigger: navbar,
      start: 'top 35%',
      end: 'bottom 20%',
      scrub: true,
    }
  });

  // Animate heroPara lines
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

  // Animate sticker
  timeline.fromTo(sticker1, {
    x: stickerX,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'ease.inOut',
  }, "=-1.5");
}

// nav text hover animation
const navLinks = document.querySelectorAll('.nav-text');
navLinks.forEach(link => {
      let rect = link.getBoundingClientRect();
      let hover = false;

      const follow = (e) => {
        if (!hover) return;
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(link, {
          x: x * 0.3,
          y: y * 0.3,
          ease: "spring(1, 0.5, false)",
          overwrite: true,
        });
      };

      link.addEventListener('mouseenter', () => {
        hover = true;
        rect = link.getBoundingClientRect(); // update in case of resize or scroll
        window.addEventListener('mousemove', follow);
      });

      link.addEventListener('mouseleave', () => {
        hover = false;
        window.removeEventListener('mousemove', follow);
        gsap.to(link, {
          x: 0,
          y: 0,
          ease: "spring(1, 0.6, true)",
        });
      });
    });