const textel = document.getElementById('text');
const speedel = document.getElementById('speed')
console.log(speedel.value);
const text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

let idx = 1;//to get the character one after another; first characters
let speed = 1000;

function autotext(){
    // console.log('hey');
    // text.slice is use to slice the text one by one start-end;
    //innertext  is use to add text into html from js
    textel.innerText= text.slice(0,idx); 
    idx++;
    
    if(idx > text.length){
        idx = 1; //when the display text end start from index1;
        
    }
    console.log(idx)
    setTimeout(autotext,speed);//tell the time out of the function;

}

// create function and use outside
autotext();
 
//Event listener
speedel.addEventListener('click',()=>{
    speed =100/speedel.value;
});

// speed=1;
// 2000/1 =2;
// 2000/50 =400;
