const list_categorie_container = document.querySelector('.categorie-list-div--open');
const categorie_list_div_close = document.querySelector('.categorie-list-div--close');
const categorie_button_container = document.querySelector('.close-categories');
let infiniteScroll; // variable para tener un infinite scroll dinamico, es decir para que la solicitud no solo se haga a un endpoint, sino que cambie dependiendo de la navegacion. 

const navigator = () =>{
    var_counterResult = 0;
    if(location.hash.startsWith('#more-movies')){
        console.log('more movies');
        h2_more_movies.innerText = 'Trending Movies';
        search_fnc_close();
        more_movies_fnc();
        infiniteScroll = get_random_movies();
        infiniteScroll();

    } else if(location.hash.startsWith('#categories')){
        console.log('categories');
        if(var_categories == 1){
            get_category_movie_list();
        }
        categories_fnc();

    } else if(location.hash.startsWith('#category=')){
        console.log('category');
        const [_, categoryData] = location.hash.split('='); // crea un array asi => [#category, 28-Action]
        const [id, genre] = categoryData.split('-'); // => [28, Action]
        more_movies_fnc();
        infiniteScroll = get_movie_by_genre(id, genre);
        infiniteScroll();

    } else if(location.hash.startsWith('#searching=')){
        console.log('searching');
        const [_, query] = location.hash.split('=');
        infiniteScroll = get_movies_by_search(query);
        infiniteScroll();
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

    } else if(location.hash.startsWith('#home-page')){
        get_trending_movies_preview();
        close_movie_details();
    }

    window.scrollTo({
        behavior: 'smooth',
        top: 0,
    });
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

const get_movie_by_genre = (id, genre) =>{
    let i = -5, page = 1;
    return async function(){
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const scrollIsBottom = (scrollTop + clientHeight >= scrollHeight - 725);
        
        if(!active_infiniteScroll){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
            }
            const res = await api('discover/movie', {
                params: {
                    with_genres: id,
                },
            });
            const movies_data = res.data.results;
            var_maxResult = res.data.total_results;
            console.log(movies_data);

            h2_more_movies.textContent = genre;
            article.innerHTML = "";
            get_movies_fnc(movies_data, article, i, page);
        } else if(scrollIsBottom && var_counterResult < var_maxResult){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
                page++;
            }
            const res = await api('discover/movie', {
                params: {
                    with_genres: id,
                    page: page,
                },
            });
            const movies_data = res.data.results;
            console.log(movies_data);
            get_movies_fnc(movies_data, article, i, page);
        }
    }
}

const get_movies_by_search = (query) =>{
    let i = -5, page = 1;
    return async function(){
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const scrollIsBottom = (scrollTop + clientHeight >= scrollHeight - 725);

        if(!active_infiniteScroll){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
                page++;
            }
            const res = await api('/search/movie', {
                params: {
                    query,
                },
            });
            const movies_data = res.data.results;
            var_maxResult = res.data.total_results;
            h2_more_movies.innerText = `Resultado: ${query}`;

            get_movies_fnc(movies_data, article, i, page);
        } else if(scrollIsBottom && var_counterResult < var_maxResult){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
                page++;
            }
            const res = await api('/search/movie', {
                params: {
                    query,
                    page,
                },
            });
            const movies_data = res.data.results;
            console.log(var_counterResult, res);
            get_movies_fnc(movies_data, article, i, page);
        }
    }    
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
if(location.hash != '#home-page'){
    window.addEventListener('scroll', () =>{
        if(active_infiniteScroll && var_counterResult < var_maxResult){
            infiniteScroll();
        }
    }, { passive: false });
}

