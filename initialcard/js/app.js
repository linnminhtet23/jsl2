//Ui
const panels= document.querySelectorAll('.panel');
console.log(panels);
panels.forEach((panel)=>{
    panel.addEventtLisetner('click', ()=>{
        removeactiveprevclass();
        panel.classList.add('active');
    })
});

function removeactiveprevclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}