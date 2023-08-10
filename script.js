const toggleButton = document.getElementById("toggle");
const navbarLinks = document.getElementsByClassName("navbar-links");

toggleButton.addEventListener("click", (e) => {
  Array.prototype.forEach.call(navbarLinks, (element) => {
    element.classList.toggle("active");
  });
  // navbarLinks.classList.toggle("active");
});
