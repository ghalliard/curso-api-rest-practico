window.addEventListener("scroll", () => {
    let header = document.querySelector('.main-header');
    let navbar_icon_menu = document.querySelector('.navbar-icon-menu div');
    let navbar_icon_profile = document.querySelector('.navbar-icon-profile div');
    let navbar_icon_logo = document.querySelector('.navbar-icon-logo div')

    navbar_icon_menu.classList.toggle('scroll-box-style', window.scrollY > 640);
    navbar_icon_profile.classList.toggle('scroll-box-style', window.scrollY > 640);
    navbar_icon_logo.classList.toggle('scroll-box-style', window.scrollY > 640);
    header.classList.toggle('scroll-down', window.scrollY > 640);
});