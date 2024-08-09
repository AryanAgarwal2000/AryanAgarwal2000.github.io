document.addEventListener("DOMContentLoaded", function() {
  // Select all navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Only handle scroll if navigating to an internal section
      if (link.getAttribute("href").startsWith('#')) {
        e.preventDefault(); // Prevent the default anchor click behavior
        const href = link.getAttribute("href");
        const section = document.querySelector(href);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Section with id ${href} not found.`);
        }
      }
    });
  });
});
