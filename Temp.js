const tl = gsap.timeline({defaults: {ease: 'power1.out'} } );

tl.to(".slider", { y: "-100%", duration:1, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 0.6}, "-=1")
tl.fromTo()