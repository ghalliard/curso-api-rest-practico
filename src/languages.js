const selectLanguages = () =>{
    const res = api('configuration/languages');
    console.log(res);
}
selectLanguages();