const navbar = document.querySelector(".main-nav");
const navPosition = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", evt => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > navPosition) {
        navbar.classList.add("sticky");
        Headers.classList.add("navbarOffsetMargin");
    } else {
        navbar.classList.remove("sticky");
        Headers.classList.remove("navbarOffsetMargin");
    }
});