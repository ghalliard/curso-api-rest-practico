const search_btn = document.querySelector('.navbar-icon-search div');
let section = document.querySelector('.search-section');
let header = document.querySelector('.main-header');
let footer = document.querySelector('.main-footer');
let main = document.querySelector('main');
const search_icon = document.querySelector('.search-icon');
const search_input = document.querySelector('.search-container input');
let location_aux = location.hash;

search_btn.addEventListener('click', () =>{
    search_input.value = '';
    location.hash = 'search';
    search_fnc();
});
search_icon.addEventListener('click', () =>{
    location.hash = `search=${search_input.value}`;
    const [_, query] = location.hash.split('=');
    get_movies_by_search(query);
});

const search_fnc = () =>{
    section.setAttribute('id', 'open');
    header.setAttribute('id', 'close');
    footer.setAttribute('id', 'close');
    main.setAttribute('id', 'close');
}

const back_button = document.querySelector('.back-button');
back_button.addEventListener('click', () =>{
    location.hash = location_aux;
    search_fnc_close();
});

const search_fnc_close = () =>{
    section.removeAttribute('id');
    header.removeAttribute('id');
    footer.removeAttribute('id');
    main.removeAttribute('id');
}
