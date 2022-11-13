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
    if(band_search && !location.hash.startsWith('#more-movies')){
        history.go(-2);
    } else if(band_categories && !location.hash.startsWith('#more-movies')){
        console.log('2');
        history.go(-2);
    } else{
        console.log('1');
        history.back();
    }
});