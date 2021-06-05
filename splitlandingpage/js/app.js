const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
// EventListener
// left.addEventListener('mouseenter',()=>{
//     // console.log("abc");
//     container.classList.add('hover-left');
// });

left.addEventListener('mouseenter',()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'));
right.addEventListener('mouseenter',function(){container.classList.add('hover-right')});
right.addEventListener('mouseleave',function(){container.classList.remove('hover-right')});