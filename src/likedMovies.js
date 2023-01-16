const getFavoriteMovies = () =>{
    const objMovieList = likedMoviesList();
    const movieArray = Object.values(objMovieList);
    const article = document.querySelector('.favorite-movies-section');

    if(location.hash == '#home-page'){
        favoriteMovies_Fnc(movieArray, article);
    }
    
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
if(location.hash == '#more-movies'){
    document.getElementById('more-movies-box').addEventListener('click', (e) =>{
        if(e.target.className == 'fa-solid fa-heart'){
            prueba_fnc(e.target.id);
        }
    });
    const prueba_fnc = async(id) =>{
        const res = await api(`/movie/${id}`); 
        const movie = res.data;
        likeMovie(movie);
        console.log(movie);
    }
}

/*
const prueba_fnc = (movie) =>{
    document.getElementById('more-movies-box').addEventListener('click', (e) => {
        if(e.target.className == 'fa-solid fa-heart'){
            console.log(movie);
        }
    });
}
*/
