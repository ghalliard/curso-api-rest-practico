const list_categorie_container = document.querySelector('.categorie-list-div--open');
const categorie_list_div_close = document.querySelector('.categorie-list-div--close');
const categorie_button_container = document.querySelector('.close-categories');

const navigator = () =>{
    if(location.hash.startsWith('#more-movies')){
        console.log('more movies');
        h2_more_movies.innerText = 'Trending Movies';
        more_movies_fnc();
        get_random_movies();
        search_fnc_close();
    } else if(location.hash.startsWith('#categories')){
        console.log('categories');
        categories_fnc();
        get_category_movie_list();

    } else if(location.hash.startsWith('#category=')){
        console.log('category');
        const [_, categoryData] = location.hash.split('='); // crea un array asi => [#category, 28-Action]
        const [id, genre] = categoryData.split('-'); // => [28, Action]
        more_movies_fnc();
        get_movie_by_genre(id, genre);

    } else if(location.hash.startsWith('#searching=')){
        console.log('searching');
        const [_, query] = location.hash.split('=');
        get_movies_by_search(query);
        search_fnc_close();
    } else if(location.hash.startsWith('#search')){
        console.log('search');
        search_input.value = '';
        search_fnc();
    } else if(location.hash.startsWith('#movie=')){
        const [_, id] = location.hash.split('=');
        header_style_movie_location();
        display_movie_details();
        get_movie_by_id(id);

    } else{
        get_trending_movies_preview();
        close_movie_details();
    }
    /*
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
    });
    */
}
const more_movies_fnc = () =>{
    list_categorie_container.removeAttribute('id');
    categorie_list_div_close.removeAttribute('id');
    categorie_button_container.removeAttribute('id');
}

const categories_fnc = () =>{
    list_categorie_container.setAttribute('id', 'open');
    categorie_list_div_close.setAttribute('id', 'close');
    categorie_button_container.setAttribute('id', 'open');
}

const get_movie_by_genre = async(id, genre) =>{
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`); 
    const data = await res.json();
    //console.log(data);
    const movies_data = data.results;
    //console.log(movies_data);

    h2_more_movies.textContent = genre;
    const article = document.querySelector('.category-movie-list-section .movie-container article');
    article.innerHTML = "";

    get_movies_fnc(movies_data, article);
}
const get_movies_by_search = async(query) =>{
    const data = await api('/search/movie', {
        params: {
            query,
        },
    });
    h2_more_movies.textContent = `Resultado: ${query}`;
    const article = document.querySelector('.category-movie-list-section .movie-container article');
    const res = data.data.results;
    console.log(res);
    get_movies_fnc(res, article);
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
