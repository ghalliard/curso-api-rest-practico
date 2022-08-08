const get_trending_movies_preview = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`); 
    const data = await res.json();
    console.log(data);

    const movies_data = data.results;
    console.log(movies_data);

    movies_data.forEach(movie => {
        const movie_list = document.querySelector('.trending-preview--movie-list');
        const movie_container = document.createElement('div');
        movie_container.classList.add('movie-container');
        const movie_image = document.createElement('img');
        movie_image.classList.add('movie-img');
        movie_image.setAttribute('alt', movie.original_title);
        movie_image.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        movie_container.appendChild(movie_image);
        movie_list.appendChild(movie_container);

        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');
        const movie_title = document.createElement('h2');
        movie_title.innerText = movie.title;

        movie_description.appendChild(movie_title);
        movie_container.appendChild(movie_description);
    });
}
get_trending_movies_preview();
