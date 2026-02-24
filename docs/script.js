// GSAP and ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Custom Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        themeToggle.setAttribute('aria-checked', 'true');
    } else {
        body.classList.remove('dark-theme');
        themeToggle.setAttribute('aria-checked', 'false');
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-theme');
    setTheme(isDark);
});

themeToggle.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Optionally, set theme from localStorage or system preference here
// ...

// Scene animations
document.addEventListener('DOMContentLoaded', () => {
    // Mountains Scene Animation
    const mountainsScene = document.querySelector('.mountains-scene');
    if (mountainsScene) {
        // Character walking animation
        gsap.to('.hiker', {
            x: 300,
            duration: 8,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

        // Mountain parallax
        gsap.to('.mountain-1', {
            y: -50,
            scrollTrigger: {
                trigger: mountainsScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.mountain-2', {
            y: -30,
            scrollTrigger: {
                trigger: mountainsScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.mountain-3', {
            y: -40,
            scrollTrigger: {
                trigger: mountainsScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Cloud movement
        gsap.to('.cloud-1', {
            x: 100,
            duration: 20,
            repeat: -1,
            ease: "none"
        });

        gsap.to('.cloud-2', {
            x: -80,
            duration: 15,
            repeat: -1,
            ease: "none"
        });

        gsap.to('.cloud-3', {
            x: 120,
            duration: 25,
            repeat: -1,
            ease: "none"
        });
    }

    // Beach Scene Animation
    const beachScene = document.querySelector('.beach-scene');
    if (beachScene) {
        // Character walking
        gsap.to('.beach-walker', {
            x: 250,
            duration: 6,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

        // Wave animation
        gsap.to('.wave-1', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.to('.wave-2', {
            y: -8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.5
        });

        gsap.to('.wave-3', {
            y: -6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1
        });

        // Palm tree sway
        gsap.to('.palm-tree', {
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Sun glow
        gsap.to('.sun', {
            scale: 1.2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Desert Scene Animation
    const desertScene = document.querySelector('.desert-scene');
    if (desertScene) {
        // Character walking
        gsap.to('.desert-explorer', {
            x: 280,
            duration: 7,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

        // Dune movement
        gsap.to('.dune-1', {
            x: -20,
            scrollTrigger: {
                trigger: desertScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.dune-2', {
            x: 15,
            scrollTrigger: {
                trigger: desertScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to('.dune-3', {
            x: -10,
            scrollTrigger: {
                trigger: desertScene,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Desert sun movement
        gsap.to('.desert-sun', {
            y: -20,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Cactus subtle movement
        gsap.to('.cactus', {
            rotation: 2,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Temple Scene Animation
    const templeScene = document.querySelector('.temple-scene');
    if (templeScene) {
        // Character walking
        gsap.to('.temple-visitor', {
            x: 200,
            duration: 5,
            ease: "none",
            repeat: -1,
            yoyo: true
        });

        // Temple glow effect
        gsap.to('.temple', {
            boxShadow: "0 0 30px rgba(255,215,0,0.5)",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Tree sway
        gsap.to('.tree', {
            rotation: 3,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Temple entrance glow
        gsap.to('.temple-base', {
            backgroundColor: "#a0522d",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Scene text animations
    const sceneTexts = document.querySelectorAll('.scene-text');
    sceneTexts.forEach((text, index) => {
        gsap.from(text, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.5,
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Character walking animations
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        // Leg animations
        const legs = character.querySelectorAll('.leg');
        legs.forEach((leg, index) => {
            gsap.to(leg, {
                rotation: index === 0 ? 15 : -15,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: index * 0.25
            });
        });

        // Arm animations
        const arms = character.querySelectorAll('.arm');
        arms.forEach((arm, index) => {
            gsap.to(arm, {
                rotation: index === 0 ? -10 : 10,
                duration: 0.6,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: index * 0.3
            });
        });
    });

    // Transportation Section Animations
    const transportationSection = document.getElementById('transportation-section');
    if (transportationSection) {
        // Bus Animation - Right to Left
        gsap.to('.bus', {
            x: -400,
            scrollTrigger: {
                trigger: '.bus-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1,
                ease: "none"
            }
        });

        // Bus wheel rotation
        gsap.to('.bus .wheel', {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "none"
        });

        // Bus background parallax
        gsap.to('.bus-scene .trees', {
            x: 100,
            scrollTrigger: {
                trigger: '.bus-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        gsap.to('.bus-scene .buildings', {
            x: -50,
            scrollTrigger: {
                trigger: '.bus-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        // Train Animation - Left to Right
        gsap.to('.train', {
            x: 400,
            scrollTrigger: {
                trigger: '.train-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1,
                ease: "none"
            }
        });

        // Train wheel rotation
        gsap.to('.train .wheel', {
            rotation: 360,
            duration: 1.5,
            repeat: -1,
            ease: "none"
        });

        // Train smoke animation
        gsap.to('.train-smoke', {
            y: -30,
            opacity: 0,
            duration: 2,
            repeat: -1,
            ease: "power1.out"
        });

        // Train background parallax
        gsap.to('.train-scene .mountains', {
            x: -80,
            scrollTrigger: {
                trigger: '.train-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        gsap.to('.train-scene .trees', {
            x: 60,
            scrollTrigger: {
                trigger: '.train-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        // Plane Animation - Left to Right
        gsap.to('.plane', {
            x: 350,
            y: -20,
            scrollTrigger: {
                trigger: '.plane-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1,
                ease: "none"
            }
        });

        // Plane wing movement
        gsap.to('.plane .wing', {
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Plane cloud movement
        gsap.to('.plane-scene .cloud', {
            x: 100,
            duration: 15,
            repeat: -1,
            ease: "none"
        });

        // Plane sun movement
        gsap.to('.plane-sun', {
            y: -10,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Ship Animation - Right to Left
        gsap.to('.ship', {
            x: -300,
            y: -5,
            scrollTrigger: {
                trigger: '.ship-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1,
                ease: "none"
            }
        });

        // Ship wave animation
        gsap.to('.ship-scene .wave', {
            y: -5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Ship flag wave
        gsap.to('.ship-flag', {
            rotation: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Ship wake animation
        gsap.to('.ship .wake-line', {
            y: -10,
            opacity: 0,
            duration: 1,
            repeat: -1,
            ease: "power1.out"
        });

        // Ship background parallax
        gsap.to('.ship-scene .islands', {
            x: 50,
            scrollTrigger: {
                trigger: '.ship-scene',
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        gsap.to('.ship-scene .cloud', {
            x: -80,
            duration: 20,
            repeat: -1,
            ease: "none"
        });

        // Vehicle wheel rotations for all transport
        const allWheels = document.querySelectorAll('.wheel');
        allWheels.forEach(wheel => {
            gsap.to(wheel, {
                rotation: 360,
                duration: 2,
                repeat: -1,
                ease: "none"
            });
        });

        // Background elements movement
        const transportScenes = document.querySelectorAll('.transport-scene');
        transportScenes.forEach((scene, index) => {
            const trees = scene.querySelectorAll('.tree');
            trees.forEach(tree => {
                gsap.to(tree, {
                    rotation: 3,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: index * 0.5
                });
            });
        });
    }
});

// Scroll-triggered animations for other sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements that need animation
document.addEventListener('DOMContentLoaded', () => {
    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => observer.observe(title));

    // Destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// CTA button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Scroll to about section
        const aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('click', () => {
            stat.style.transform = 'scale(0.95)';
            setTimeout(() => {
                stat.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Placeholder for LaTeX animation logic
// In the future, you can use MathJax or KaTeX for rendering LaTeX
// For now, just animate the placeholder text
const latexPlaceholder = document.getElementById('latex-placeholder');
let latexVisible = true;
setInterval(() => {
    latexPlaceholder.style.opacity = latexVisible ? '1' : '0.5';
    latexVisible = !latexVisible;
}, 1000);

// Animate realistic hiker in mountain scene
function animateRealisticHiker() {
    const hiker = document.querySelector('.realistic-hiker');
    if (!hiker) return;
    const svg = hiker.querySelector('svg');
    if (!svg) return;
    // Get SVG elements for arms and legs
    const leftLeg = svg.querySelector('rect[x="26"][y="80"]');
    const rightLeg = svg.querySelector('rect[x="32"][y="80"]');
    const leftArm = svg.querySelector('rect[x="18"][y="55"]');
    const rightArm = svg.querySelector('rect[x="34"][y="55"]');

    // Walking animation (swing arms and legs)
    if (leftLeg && rightLeg && leftArm && rightArm) {
        gsap.to(leftLeg, {
            rotation: 25,
            transformOrigin: "50% 0%",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(rightLeg, {
            rotation: -25,
            transformOrigin: "50% 0%",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(leftArm, {
            rotation: -20,
            transformOrigin: "50% 0%",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
        gsap.to(rightArm, {
            rotation: 20,
            transformOrigin: "50% 0%",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Move hiker horizontally as user scrolls through the scene
    gsap.to(hiker, {
        x: 220,
        scrollTrigger: {
            trigger: ".realistic-mountains",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
}

// Animate realistic SVG plane in transportation section
function animateRealisticPlane() {
    const planeWrapper = document.querySelector('.realistic-plane-wrapper');
    const planeClouds = document.querySelectorAll('.plane-cloud-svg');
    const motionLines = document.querySelectorAll('.plane-motion-lines rect');
    if (!planeWrapper) return;

    // Plane moves left to right as you scroll
    gsap.to(planeWrapper, {
        x: 320,
        scrollTrigger: {
            trigger: '.realistic-plane-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });

    // Clouds parallax
    gsap.to(planeClouds[0], {
        x: 60,
        scrollTrigger: {
            trigger: '.realistic-plane-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });
    gsap.to(planeClouds[1], {
        x: -40,
        scrollTrigger: {
            trigger: '.realistic-plane-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });
    gsap.to(planeClouds[2], {
        x: 30,
        scrollTrigger: {
            trigger: '.realistic-plane-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });
    gsap.to(planeClouds[3], {
        x: -20,
        scrollTrigger: {
            trigger: '.realistic-plane-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });

    // Animate motion lines for speed effect
    motionLines.forEach((line, i) => {
        gsap.to(line, {
            opacity: 0.2,
            x: -10,
            duration: 0.5 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.1
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateRealisticHiker();
    animateRealisticPlane();
}); 