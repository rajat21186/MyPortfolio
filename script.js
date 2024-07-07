// Keep the existing code and add these new functions

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.heading, .skills-box, .project-box');
hiddenElements.forEach((el) => observer.observe(el));

// Typing effect for the home section
const typingEffect = () => {
  const text = "";
  const typingElement = document.querySelector('.home-content p');
  let i = 0;

  const typing = setInterval(() => {
      if (i < text.length) {
          typingElement.innerHTML += text.charAt(i);
          i++;
      } else {
          clearInterval(typing);
      }
  }, 50);
}

window.addEventListener('load', typingEffect);