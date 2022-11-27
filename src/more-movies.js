location.hash = 'more-movies';
const close_categories = document.getElementById('close-category-button');
const display_categories = document.querySelector('.display-categories');
const h2_more_movies = document.querySelector('.movie-container .second-title');

const get_movies_fnc = (data, container) =>{
    container.innerHTML = '';
    for(let i = 0; i < 5; i++){
        const movie_item = document.createElement('div');
        movie_item.classList.add('movie-item');

        const movie_img_container = document.createElement('div');
        movie_img_container.classList.add('movie-img-container');

        
        if(data[i].poster_path != null){
            const movie_img = document.createElement('img');
            movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w500${data[i].poster_path}`);
            movie_img_container.appendChild(movie_img);
        } else{
            const text = document.createElement('p');
            text.classList.add('class', 'null-image-text');
            text.innerText = data[i].title;
            movie_img_container.classList.add('movie-img-container--null-image');
            movie_img_container.appendChild(text);
        }

        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');

        const movie_title = document.createElement('h1');
        movie_title.innerText = data[i].title;

        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'Comprar';

        const second_button = document.createElement('button');
        second_button.classList.add('second-button');
        second_button.innerText = 'Ver detalles';

        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_description.appendChild(second_button);
        movie_item.appendChild(movie_img_container);
        movie_item.appendChild(movie_description);
        container.appendChild(movie_item);
    }
}

const get_random_movies = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`); 
    const data = await res.json();
    console.log(data);

    const movies_data = data.results;
    console.log(movies_data);
    const article = document.querySelector('.category-movie-list-section .movie-container article');
    
    get_movies_fnc(movies_data, article);
}

const get_category_movie_list = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const data = await res.json();
    console.log(data);

    const category_list = data.genres;
    const container = document.querySelector('.categorie-list-div--open');
    const ul = document.querySelector('.categorie-list-div--open .list');
    ul.innerHTML = '';
    category_list.forEach(element => {
        const li = document.createElement('li');
        const span = document.createElement('span');

        span.innerText = element.name;
        span.addEventListener('click', () =>{
            location.hash = `#category=${element.id}-${element.name}`;
        });
        li.classList.add('category-item');
        li.appendChild(span);
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
close_categories.addEventListener('click', () => {
    location.hash = 'more-movies';
});
display_categories.addEventListener('click', () => {
    location.hash = 'categories';
});
