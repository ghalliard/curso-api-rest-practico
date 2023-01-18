document.querySelector('.menu-sublist').addEventListener('click', (e) =>{
    const lang_button = e.target;
    const var_location = location.href;

    if(lang_button.id.startsWith('lang')){
        const [_, lang] = lang_button.id.split('_');
        selectLanguages(lang, var_location);
    }
    
});

const selectLanguages = (lang, var_location) =>{
    localStorage.setItem('language', lang);
    console.log(localStorage.getItem('language'));
    location.reload();
}
//selectLanguages();
