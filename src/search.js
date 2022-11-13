const search_btn = document.querySelector('.navbar-icon-search div');
let section = document.querySelector('.search-section');
let footer = document.querySelector('.main-footer');
let main = document.querySelector('main');
const search_icon = document.querySelector('.search-icon');
const search_input = document.querySelector('.search-container input'); 
let band_search = false; 

search_btn.addEventListener('click', () =>{
    band_categories = false;
    location.hash = 'search';
});
search_icon.addEventListener('click', () =>{
    location.hash = `searching=${search_input.value}`;
});

const search_fnc = () =>{
    section.setAttribute('id', 'open');
    header.setAttribute('id', 'close');
    footer.setAttribute('id', 'close');
    main.setAttribute('id', 'close');
}

const back_button = document.querySelector('.back-button');
back_button.addEventListener('click', () =>{
    history.back();
});

const search_fnc_close = () =>{
    section.removeAttribute('id');
    header.removeAttribute('id');
    footer.removeAttribute('id');
    main.removeAttribute('id');
}
