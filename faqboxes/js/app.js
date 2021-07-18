const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);
gettoggles.forEach(gettoggle=>{
    gettoggle.addEventListener('click',()=>{
        gettoggle.parentNode.classList.toggle('active');
        //use toggle because we wanna add or remove
        //call the parent element because active or not is add to the parent div faq
    })
})