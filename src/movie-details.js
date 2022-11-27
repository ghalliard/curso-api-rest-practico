const best_premier_movies = document.querySelector('.best-premier-movies');
const movies_section = document.querySelector('.movies-section');
const movie_details_section = document.querySelector('.movie-details-section');
const related_movie_item = [];

const movie_duration = (minutes) =>{
    const hour = parseInt(minutes/60);
    const min = minutes%60;
    return [hour, min];
}

const display_movie_details = () =>{
    best_premier_movies.setAttribute('id', 'close');
    movies_section.setAttribute('id', 'close');
    movie_details_section.setAttribute('id', 'open');
}
const close_movie_details = () =>{
    best_premier_movies.removeAttribute('id');
    movies_section.removeAttribute('id');
    movie_details_section.removeAttribute('id');
}
const get_movie_by_id = async(id) =>{
    const res = await api(`/movie/${id}`); 
    const movie = res.data;
    console.log(movie);

    const img = document.querySelector('.movie-backdropPath img');
    img.setAttribute('alt', `${movie.title} movie poster`);
    img.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`);
    const title = document.querySelector('.movie-details h3');
    title.innerText = movie.title;

    const duration = movie_duration(movie.runtime);
    const subtitle = document.querySelector('.movie-details-subtitle');
    subtitle.innerHTML = `${movie.genres[0].name} | ${duration[0]}h ${duration[1]}m | <i class="fa-solid fa-star" style='color: #FFC300'></i> ${movie.vote_average}`;

    const synopsis = document.querySelector('.movie-details-synopsis');
    synopsis.innerText = `${movie.overview}`;
    getRelatedMoviesId(id, true);
}

const getRelatedMoviesId = async (id, lazyload = false) =>{
    const res = await api(`movie/${id}/recommendations`);
    const data = res.data.results;
    console.log(data);
    const article = document.querySelector('.movie-recommendations-section');
    article.innerHTML = '';

    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div');
        div.classList.add('related-movie-item');
        div.addEventListener('click', () =>{
            location.hash = `movie=${data[i].id}`;
        });

        const img = document.createElement('img');
        img.setAttribute('alt', `${data[i].title} movie poster`);
        
        img.setAttribute(
            lazyload ? 'data-img' : 'src', 
            `https://image.tmdb.org/t/p/w500${data[i].poster_path}`
        );
        
        if(lazyload){
            observador.observe(img);
        }
        div.appendChild(img);
        article.appendChild(div);
    }
}

