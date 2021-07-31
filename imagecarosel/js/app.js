// UI 
const imagecarousel = document.getElementById('imgcarousel');
const image = document.querySelectorAll('#imgcarousel img');
// console.log(image);
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let idx=0;

rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    resetinterval();
});

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    resetinterval();
});

function changeimage(){
    if(idx > image.length-1){
        idx=0;
       
    }else if(idx<0){
        idx = image.length-1;
    }
    
    imagecarousel.style.transform =`translatex(${idx * -500}px)`;
    // console.log(imagecarousel);
}

let interval=setInterval(imgrun,2000);
function imgrun(){
    idx++;
    changeimage()
}

function resetinterval(){
    clearInterval(interval);
   interval= setInterval(imgrun,2000);//overwriting the interval function
}
