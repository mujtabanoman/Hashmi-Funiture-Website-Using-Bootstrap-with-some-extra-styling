const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// scroll animation

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('#container');

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible'); // Add visible class when in view
      } else {
          section.classList.remove('visible'); // Remove visible class when out of view
      }
  });
});

// about us animation

window.addEventListener('load', () => {
  const aboutUsSection = document.getElementById('about-us');
  aboutUsSection.classList.add('loaded'); // Add the loaded class
});
