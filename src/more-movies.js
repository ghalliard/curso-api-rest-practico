location.hash = 'more-movies';
const get_random_movies = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`); 
    const data = await res.json();
    console.log(data);

    const movies_data = data.results;
    console.log(movies_data);
    
    for(let i = 0; i < 5; i++){
        const article = document.querySelector('.category-movie-list-section .movie-container article');
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

const get_category_movie_list = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const data = await res.json();
    console.log(data);

    const category_list = data.genres;
    const container = document.querySelector('.categorie-list-div--open');
    const ul = document.querySelector('.categorie-list-div--open .list');
    category_list.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.name;
        li.classList.add('category-item');
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
get_random_movies();
get_category_movie_list();