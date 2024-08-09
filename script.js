document.addEventListener("DOMContentLoaded", function() {
  // Select all navigation links and sections
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  // Add event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default anchor click behavior
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      // Check if the section exists
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Section with id ${sectionId} not found.`);
      }
    });
  });
});
