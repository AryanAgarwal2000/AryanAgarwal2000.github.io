document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
});
