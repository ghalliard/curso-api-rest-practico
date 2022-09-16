const navigator = () =>{
    console.log(location);
    
    if(location.hash.startsWith('#more-movies')){
        console.log('more movies');
    } else if(location.hash.startsWith('#categories')){
        console.log('categories');
    } else{
        console.log('home');
        get_trending_movies_preview();
    }
}
window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
