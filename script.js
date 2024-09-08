document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.backgroundColor = "#ffeb99";
        });

        skill.addEventListener("mouseout", () => {
            skill.style.backgroundColor = "#f3f0ff";
        });
    });
});

// Adding animations on scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('section');
    let windowHeight = window.innerHeight;
  
    elements.forEach(element => {
      let position = element.getBoundingClientRect().top;
  
      if(position < windowHeight - 50) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  });
  