const back_history_button = document.querySelector('.back-history-button');

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

/*lazy loading*/
const loadImages_fnc = (entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            console.log({entry});
            const url = entry.target.getAttribute('data-img');
            entry.target.setAttribute('src', url);
        }
    });
}
const lazyLoader = new IntersectionObserver(loadImages_fnc, {
    root: null,
    rootMargin: '0px -32px 0px -32px',
    threshold: 0.0,
});

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