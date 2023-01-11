location.hash = 'more-movies';
const close_categories = document.getElementById('close-category-button');
const display_categories = document.querySelector('.display-categories');
const h2_more_movies = document.querySelector('.movie-container .second-title');
const article = document.querySelector('.category-movie-list-section .movie-container article');

let active_infiniteScroll = false;

const get_random_movies = () =>{
    let i = -5, page = 1; 
    return async function(){
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        const scrollIsBottom = (scrollTop + clientHeight >= scrollHeight - 725); //calcula cuando se llegue a cierta parte para activar el scroll infinito
        
        if(!active_infiniteScroll){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
                page++;
            }
            const res = await api('trending/movie/day', {
                params: {
                    page,
                },
            }); 
            const movies_data = res.data.results;
            var_maxResult = res.data.total_results;
            console.log(movies_data);
            get_movies_fnc(movies_data, article, i, page);

        } else if(scrollIsBottom && var_counterResult < var_maxResult){
            var_counterResult += 5;
            if(i < 15){
                i += 5;
            } else if(i == 15){
                i = 0;
                page++;
            }
            const res = await api('trending/movie/day', {
                params: {
                    page,
                },
            }); 
            console.log(res);
            const movies_data = res.data.results;
            console.log(movies_data);
            get_movies_fnc(movies_data, article, i, page);
        }
    }
    
}

const get_category_movie_list = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const data = await res.json();
    console.log(data);

    const category_list = data.genres;
    const container = document.querySelector('.categorie-list-div--open');
    const ul = document.querySelector('.categorie-list-div--open .list');
    ul.innerHTML = '';
    category_list.forEach(element => {
        const li = document.createElement('li');
        const span = document.createElement('span');

        span.innerText = element.name;
        span.addEventListener('click', () =>{
            location.hash = `#category=${element.id}-${element.name}`;
        });
        li.classList.add('category-item');
        li.appendChild(span);
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
close_categories.addEventListener('click', () => {
    location.hash = 'more-movies';
});
display_categories.addEventListener('click', () => {
    var_categories++;
    location.hash = 'categories';
});
