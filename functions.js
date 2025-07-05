document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('contact-success').style.display = 'block';
    this.reset();
    setTimeout(()=>{ document.getElementById('contact-success').style.display = 'none'; }, 4000);
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});

    document.querySelectorAll('.nav-links.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    const typingText = "Experience premium-quality FEU Institute of Technology apparel, accessories, and collectibles. Crafted for brave iTamaraws. Celebrate your school spirit with authentic merchandise from the country’s premier tech institution.";
const typingTarget = document.getElementById('typing-desc');
let idx = 0;
let direction = 1; 
let pause = false;

function typeEffect() {
    if (pause) return;
    if (direction === 1) {
        if (idx <= typingText.length) {
            typingTarget.innerHTML = typingText.slice(0, idx) + '<span class="typing-cursor">|</span>';
            idx++;
            setTimeout(typeEffect, 28);
        } else {
            pause = true;
            setTimeout(() => { direction = -1; pause = false; typeEffect(); }, 3500); 
        }
    } else {
        if (idx >= 0) {
            typingTarget.innerHTML = typingText.slice(0, idx) + '<span class="typing-cursor">|</span>';
            idx--;
            setTimeout(typeEffect, 10);
        } else {
            pause = true;
            setTimeout(() => { direction = 1; pause = false; typeEffect(); }, 1200);
        }
    }
}
typeEffect();
    
document.getElementById('contact-scroll-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
