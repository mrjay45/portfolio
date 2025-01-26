const navLinks = document.querySelectorAll("#nav-text a");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Check if section is in the viewport
    if (
      scrollPosition >= offset - 50 &&
      scrollPosition < offset + height - 50
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        // Get the corresponding link for the section
        let currentLink = document.querySelector(`#nav-text a[href*="${id}"]`);
        if (currentLink) {
          currentLink.classList.add("active");
        }
      });
    }
  });
};



navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
