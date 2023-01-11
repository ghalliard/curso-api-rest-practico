const getFavoriteMovies = () =>{
    const objMovieList = likedMoviesList();
    const movieArray = Object.values(objMovieList);
    const article = document.querySelector('.favorite-movies-section');

    favoriteMovies_Fnc(movieArray, article);
    console.log(movieArray);
}

const favoriteMovies_Fnc = (movieArray, article) =>{
    article.innerHTML = '';
    movieArray.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('movie-img-container');
        div.classList.add('related-movie-item');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w500${element.poster_path}`);
        div.appendChild(movie_img);
        article.appendChild(div);
    });
}