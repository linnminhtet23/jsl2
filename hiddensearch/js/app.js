// Ui
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input =document.querySelector('.input');

// Event Listener
btn.addEventListener('click',()=>{
    // console.log("hay");
    search.classList.toggle('active');

    input.focus();//already add cursor
    
})