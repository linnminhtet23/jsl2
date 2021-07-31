const loadtext = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

                    // 30 milli seconds
let int = setInterval(blur,30);

function blur(){
    load++;
    // console.log(load);



    if(load > 99){
        clearInterval(int);
    }
        // end in load is 100
    // console.log(load);

    loadtext.textContent = `${load}%`;
    loadtext.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`;

}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-number
const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax-outmin) / (inmax - inmin) + outmin;
}

