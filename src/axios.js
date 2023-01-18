const back_history_button = document.querySelector('.back-history-button');
let var_maxResult;
let var_counterResult;

// DATA
let api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    params: {
        'api_key': apiKey,
        'language': localStorage.getItem('language'),
    },
}); 


back_history_button.addEventListener('click', () =>{
    history.back();
});

const get_movies_fnc = (data, container, index = 0, page = 1) =>{
    let aux;
    const resultRemainder = var_maxResult%5; //para limitar el contenido
   
    if(index === 0 && page === 1){
        container.innerHTML = '';
    }

    if(var_maxResult%5 != 0){
        if(var_counterResult > var_maxResult){
            aux = index + resultRemainder;
        } else{
            aux = index + 5;
        }
    } else{
        aux = index + 5;
    } 

    for(index; index < aux; index++){
        // boton de like
        const button = document.createElement('button');
        const movieListObj = likedMoviesList();
        
        if(movieListObj[data[index].id]){
            button.classList.add('liked-button--active');
        }
        button.classList.add('liked-button');
        button.innerHTML = '<i class="fa-solid fa-heart"></i>';
        button.firstChild.setAttribute('id', data[index].id);
        button.addEventListener('click', () =>{
            button.classList.toggle('liked-button--active');
        });
        // fin boton de like

        const movie_item = document.createElement('div');
        movie_item.classList.add('movie-item');

        const movie_img_container = document.createElement('div');
        movie_img_container.classList.add('movie-img-container');

        if(data[index].poster_path != null){
            const movie_img = document.createElement('img');
            movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w500${data[index].poster_path}`);
            movie_img_container.appendChild(movie_img);
        } else{
            const text = document.createElement('p');
            text.classList.add('class', 'null-image-text');
            text.innerText = data[index].title;
            movie_img_container.classList.add('movie-img-container--null-image');
            movie_img_container.appendChild(text);
        }

        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');

        const movie_title = document.createElement('h1');
        movie_title.innerText = data[index].title;

        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'Comprar';

        const second_button = document.createElement('button');
        second_button.classList.add('second-button');
        second_button.innerText = 'Ver detalles';

        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_description.appendChild(second_button);
        movie_img_container.appendChild(button);
        movie_item.appendChild(movie_img_container);
        movie_item.appendChild(movie_description);
        container.appendChild(movie_item);
    }
}

const likedMoviesList = () =>{
    const item = JSON.parse(localStorage.getItem('liked_movies'));
    let movieList;

    if(item){
        movieList = item;
    } else{
        movieList = {};
    }
    return movieList;
}

const likeMovie = (movie) =>{
    const likedMovie = likedMoviesList(); // esta linea devuelve el objeto like_movies.
    console.log(likedMovie);

    if(likedMovie[movie.id]){
        likedMovie[movie.id] = undefined;
    } else{
        likedMovie[movie.id] = movie;
    }
    
    localStorage.setItem('liked_movies', JSON.stringify(likedMovie));
}



/*lazy loading*/
const observer_fnc = (entries) =>{
    entries.forEach(element => {
        if(element.isIntersecting){
            const url = element.target.getAttribute('data-img');
            element.target.setAttribute('src', url);
        }
    });
}

const observador = new IntersectionObserver(observer_fnc);




/* 
const lazyLoader = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            console.log({entry});
            const url = entry.target.getAttribute('data-img');
            entry.target.setAttribute('src', url);
        }
        
    });
});  
*/