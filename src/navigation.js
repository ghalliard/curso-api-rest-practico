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
    } else if(location.hash.startsWith('#category=')){
        console.log('category');
        const [_, categoryData] = location.hash.split('='); // crea un array asi => [#category, 28-Action]
        const [id, genre] = categoryData.split('-'); // => [28, Action]
        get_movie_by_genre(id, genre);
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


const get_movie_by_genre = async(id, genre) =>{
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`); 
    const data = await res.json();
    console.log(data);
    const movies_data = data.results;
    console.log(movies_data);

    const h2 = document.querySelector('.movie-container .second-title');
    h2.innerText = genre;
    const article = document.querySelector('.category-movie-list-section .movie-container article');
    article.innerHTML = "";

    for(let i = 0; i < 5; i++){
        const movie_item = document.createElement('div');
        movie_item.classList.add('movie-item');

        const movie_img_container = document.createElement('div');
        movie_img_container.classList.add('movie-img-container');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies_data[i].poster_path}`);

        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');

        const movie_title = document.createElement('h1');
        movie_title.innerText = movies_data[i].title;

        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'Comprar';

        const second_button = document.createElement('button');
        second_button.classList.add('second-button');
        second_button.innerText = 'Ver detalles';

        movie_img_container.appendChild(movie_img);
        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_description.appendChild(second_button);
        movie_item.appendChild(movie_img_container);
        movie_item.appendChild(movie_description);
        article.appendChild(movie_item);
    }
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
