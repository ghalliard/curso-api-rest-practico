location.hash = 'home-page';
const article = document.querySelector('.movie-list');

const get_trending_movies_preview = async() =>{
    const res = await api('trending/movie/day'); 
    const movies_data = res.data.results;
    console.log(res);
    article.innerHTML = '';

    for(let i = 0; i < 5; i++){
        const movie_poster_container = document.createElement('div');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('alt', `${movies_data[i].title} poster`);
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w500${movies_data[i].poster_path}`);

        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');

        const movie_title = document.createElement('h1');
        movie_title.innerText = movies_data[i].title

        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'Ver detalles';
        main_button.addEventListener('click', () =>{
            location.hash = `movie=${movies_data[i].id}`;
        });

        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_poster_container.appendChild(movie_img);
        movie_poster_container.appendChild(movie_description);
        article.appendChild(movie_poster_container);
    }

    for(let i = 5; i < 10; i++){
        const button = document.createElement('button');
        const movieListObj = likedMoviesList();
        if(movieListObj[movies_data[i].id]){
            button.classList.add('liked-button--active');
        }
        button.classList.add('liked-button');
        button.innerHTML = '<i class="fa-solid fa-heart"></i>';
        button.addEventListener('click', () =>{
            button.classList.toggle('liked-button--active');
            likeMovie(movies_data[i]);
            getFavoriteMovies();
        });

        const div = document.querySelector(`.movie${i-4}`);
        div.innerHTML = '';

        const img = document.createElement('img');
        img.classList.add('image');
        img.setAttribute('src', `https://image.tmdb.org/t/p/w500${movies_data[i].poster_path}`);

        div.appendChild(img);
        div.appendChild(button);
        img.addEventListener('click', () =>{
            location.hash = `movie=${movies_data[i].id}`;
        });
    }
}



/*
FORMA TRADICIONAL:
const get_trending_movies_preview = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`); 
    const data = await res.json();
    console.log(data);

    const movies_data = data.results;
    console.log(movies_data);
    
    for(let i = 0; i < 5; i++){
        const article = document.querySelector('.movie-list');
        const movie_poster_container = document.createElement('div');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies_data[i].poster_path}`);
        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');
        const movie_title = document.createElement('h1');
        movie_title.innerText = movies_data[i].title
        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'Comprar';

        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_poster_container.appendChild(movie_img);
        movie_poster_container.appendChild(movie_description);
        article.appendChild(movie_poster_container);
    }

    
    for(let i = 5; i < 10; i++){
        const div = document.querySelector(`.movie${i-4}`);
        const img = document.createElement('img');
        img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies_data[i].poster_path}`);

        div.appendChild(img);
    }
}
*/


