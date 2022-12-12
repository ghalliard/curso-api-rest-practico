const loadMoreMoviesBtn = document.getElementById('load-more-movies');
let i = 0;

loadMoreMoviesBtn.addEventListener('click', () =>{
    i = i + 5;
    if(i < 20){
        console.log(i);
        loadMoreMoviesFnc(i);
    } else{
        console.log('counter lleno');
    }
});

const loadMoreMoviesFnc = async(counter) =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`); 
    const data = await res.json();
    const movies_data = data.results;
    console.log(movies_data);
    const article = document.querySelector('.category-movie-list-section .movie-container article'); 

    get_movies_fnc(movies_data, article, counter);
}