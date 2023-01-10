const back_history_button = document.querySelector('.back-history-button');

// DATA
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    params: {
        'api_key': apiKey,
    },
}); 
back_history_button.addEventListener('click', () =>{
    history.back();
});

const likedMoviesList = () =>{
    const item = JSON.parse(localStorage.getItem('liked_movies'));
    let movieList;

    if(item){
        movieList = item;
    } else{
        movieList = {};
    }
    console.log(movieList);
    return movieList;
}

const likeMovie = (movie) =>{
    const likedMovie = likedMoviesList();
    console.log(likedMovie);
    
    if(likedMovie[movie.id]){
        likedMovie[movie.id] = undefined;
        console.log('la peli ya esta en local storage');
    } else{
        likedMovie[movie.id] = movie;
        console.log('la peli no esta en local storage');
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