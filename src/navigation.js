const list_categorie_container = document.querySelector('.categorie-list-div--open');
const categorie_list_div_close = document.querySelector('.categorie-list-div--close');
const categorie_button_container = document.querySelector('.close-categories');
const display_categories = document.querySelector('.display-categories');
const close_categories = document.getElementById('close-category-button');

const navigator = () =>{
    console.log(location);
    
    if(location.hash.startsWith('#more-movies')){
        console.log('more movies');
        more_movies_fnc();
    } else if(location.hash.startsWith('#categories')){
        console.log('categories');
        categories_fnc();
    } else{
        console.log('home');
        get_trending_movies_preview();
    }
}

const more_movies_fnc = () =>{
    display_categories.addEventListener('click', () => {
        location.hash = 'categories';
        list_categorie_container.setAttribute('id', 'open');
        categorie_list_div_close.setAttribute('id', 'close');
        categorie_button_container.setAttribute('id', 'open');
    });
}

const categories_fnc = () =>{
    close_categories.addEventListener('click', () => {
        location.hash = 'more-movies';
        list_categorie_container.removeAttribute('id');
        categorie_list_div_close.removeAttribute('id');
        categorie_button_container.removeAttribute('id');
    });
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
