document.querySelector('#display-sublist button').addEventListener('click', () =>{
    let height = 0;
    const list = document.querySelector('.menu-sublist');

    if(list.clientHeight == 0){
        height = list.scrollHeight;
    }
    list.style.height = `${height}px`;
});
