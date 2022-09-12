window.addEventListener("scroll", () => {
    let header = document.querySelector('.main-header');
    header.classList.toggle('scroll-down', window.scrollY > 640);
});