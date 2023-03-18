const carousel_controls = () =>{
    const carousel_control_prev = document.querySelector('.carousel-control-prev');
    const carousel_control_next = document.querySelector('.carousel-control-next');
    
    carousel_control_next.addEventListener('click', () =>{
        console.log('gaa1');
    });
    carousel_control_prev.addEventListener('click', () =>{
        console.log('gaa2');
    });


}
const carousel_indicators = () =>{
    
}
carousel_controls();