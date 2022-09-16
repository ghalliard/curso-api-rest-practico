const list_categorie_container = document.querySelector('.categorie-list-div--open');
const categorie_list_div_close = document.querySelector('.categorie-list-div--close');
const categorie_button_container = document.querySelector('.close-categories');

const display_categories = document.querySelector('.display-categories');
display_categories.addEventListener('click', () => {
    location.hash = 'categories';
    list_categorie_container.setAttribute('id', 'open');
    categorie_list_div_close.setAttribute('id', 'close');
    categorie_button_container.setAttribute('id', 'open');
});

const close_categories = document.getElementById('close-category-button');
close_categories.addEventListener('click', () => {
    location.hash = 'more-movies';
    list_categorie_container.removeAttribute('id');
    categorie_list_div_close.removeAttribute('id');
    categorie_button_container.removeAttribute('id');
});
