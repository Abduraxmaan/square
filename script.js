
const square = document.querySelectorAll('.square');

square.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == 'black'){
            item.style.background = 'red'
            item.style.transition = '1s'
            item.style.borderRadius = '50%'  
        } else {
            item.style.background = 'black'
        }            
    }) 
})