const display_categories = document.querySelector('.display-categories');
display_categories.addEventListener('click', () => {
    const list_categorie_container = document.querySelector('.categorie-list-div--open');
    list_categorie_container.setAttribute('id', 'open');
    const categorie_list_div_close = document.querySelector('.categorie-list-div--close');
    categorie_list_div_close.setAttribute('id', 'close');
});

