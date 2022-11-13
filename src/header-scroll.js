let header = document.querySelector('.main-header');
let navbar_icon_menu = document.querySelector('.navbar-icon-menu div');
let navbar_icon_profile = document.querySelector('.navbar-icon-profile div');
let navbar_icon_logo = document.querySelector('.navbar-icon-logo div');
let navbar_icon_search = document.querySelector('.navbar-icon-search div');

window.addEventListener("scroll", () =>{
    if(location.hash.includes('home-page')){
        navbar_icon_menu.classList.toggle('scroll-box-style', window.scrollY > 640);
        navbar_icon_profile.classList.toggle('scroll-box-style', window.scrollY > 640);
        navbar_icon_logo.classList.toggle('scroll-box-style', window.scrollY > 640);
        navbar_icon_search.classList.toggle('scroll-box-style', window.scrollY > 640);
        header.classList.toggle('scroll-down', window.scrollY > 640);
    }
});

const header_style_movie_location = () =>{
    header.classList.add('scroll-down');
    navbar_icon_menu.classList.add('scroll-box-style');
    navbar_icon_profile.classList.add('scroll-box-style');
    navbar_icon_logo.classList.add('scroll-box-style');
    navbar_icon_search.classList.add('scroll-box-style');
}

