const loadMoreMoviesBtn = document.getElementById('load-more-movies');
const article = document.querySelector('.category-movie-list-section .movie-container article');
let active_infiniteScroll = false;
let var_page = 1;
let i = 0;


loadMoreMoviesBtn.addEventListener('click', () =>{
    active_infiniteScroll = true;
    if(window.document.documentElement.scrollTop > 725){
        loadMoreMoviesFnc();
    }
    console.log('scroll infinito activo');
});

const loadMoreMoviesFnc = async() =>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    const scrollIsBottom = (scrollTop + clientHeight >= scrollHeight - 725);
    
    if(scrollIsBottom){
        i = i + 5;
        if(i%20 == 0){
            var_page++;
            i = 0;
        }
        console.log(i);
        const res = await api('trending/movie/day', {
            params: {
                page: var_page,
            },
        }); 
        const movies_data = res.data.results;
        console.log(movies_data);
        get_movies_fnc(movies_data, article, i, var_page);
    }    
}

window.addEventListener('scroll', () =>{
    if(active_infiniteScroll){
        loadMoreMoviesFnc();
    }
});