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