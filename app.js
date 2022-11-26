const navbar = document.querySelector(".main-nav");
// returns a DOMRect object providing info about the size of an element & its position relative to viewport
const navPosition = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", function() {
    // returns the number of px that document is currently scrolled vertically
    let scrollPosition = window.scrollY;

    if (scrollPosition > navPosition) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});