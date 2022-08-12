const get_trending_movies_preview = async() =>{
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`); 
    const data = await res.json();
    console.log(data);

    const movies_data = data.results;
    console.log(movies_data);
    
    for(let i = 0; i < 5; i++){
        const article = document.querySelector('.movie-list');
        const movie_poster_container = document.createElement('div');

        const movie_img = document.createElement('img');
        movie_img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies_data[i].poster_path}`);
        const movie_description = document.createElement('div');
        movie_description.classList.add('movie-description');
        const movie_title = document.createElement('h1');
        movie_title.innerText = movies_data[i].title
        const main_button = document.createElement('button');
        main_button.classList.add('main-button');
        main_button.innerText = 'COMPRAR';

        movie_description.appendChild(movie_title);
        movie_description.appendChild(main_button);
        movie_poster_container.appendChild(movie_img);
        movie_poster_container.appendChild(movie_description);
        article.appendChild(movie_poster_container)
    }

    
    for(let i = 5; i < 10; i++){
        const div = document.querySelector(`.movie${i-4}`);
        const img = document.createElement('img');
        img.setAttribute('src', `https://image.tmdb.org/t/p/w300${movies_data[i].poster_path}`);

        div.appendChild(img);
    }
}
get_trending_movies_preview();
