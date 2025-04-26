function toggleMenu() {
  const nav = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");

  nav.classList.toggle("show");
  toggle.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navMenu");
  const links = nav.querySelectorAll("a");
  const toggle = document.getElementById("menuToggle");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      toggle.classList.remove("active");
    });
  });
});
