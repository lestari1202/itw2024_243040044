const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

// Toggle the menu on click
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Add active class to clicked menu item and close menu
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
