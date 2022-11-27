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