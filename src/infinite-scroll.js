const loadMoreMoviesBtn = document.getElementById('load-more-movies');

loadMoreMoviesBtn.addEventListener('click', () =>{
    active_infiniteScroll = true;
    console.log("scroll infinito activado");
    if(document.documentElement.scrollTop > 725){
        infiniteScroll();
    }
});
