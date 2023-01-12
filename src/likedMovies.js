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
        const button = document.createElement('button');
        const movieListObj = likedMoviesList();
        if(movieListObj[element.id]){
            button.classList.add('liked-button--active');
        }
        button.classList.add('liked-button');
        button.innerHTML = '<i class="fa-solid fa-heart"></i>';
        button.addEventListener('click', () =>{
            button.classList.toggle('liked-button--active');
            likeMovie(element);
            getFavoriteMovies();
        });

        console.log(element);
        const div = document.createElement('div');
        div.classList.add('movie-img-container');
        div.classList.add('related-movie-item');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w500${element.poster_path}`);

        div.appendChild(movie_img);
        div.appendChild(button);
        article.appendChild(div);
    });
}