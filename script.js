  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".reveal", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2
  });

  gsap.utils.toArray("section").forEach(section => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });
  });


const pills = document.querySelectorAll('.pill');
const circle = document.querySelector('.circle');

pills.forEach(pill => {
    pill.addEventListener('click', function() {
        console.log(`Clicou em: ${this.textContent}`);
        this.style.background = 'rgba(30, 136, 229, 0.3)';
        setTimeout(() => {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
        }, 300);
    });
});

circle.addEventListener('click', function() {
    console.log('Clicou no círculo PR');
});

window.addEventListener('load', function() {
    circle.style.animation = 'scaleIn 0.6s ease-out';
});

const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.inOut"
    });
  });
});

const offset = 80; // altura do header

gsap.to(window, {
  duration: 1,
  scrollTo: {
    y: target,
    offsetY: offset
  },
  ease: "power2.inOut"
});