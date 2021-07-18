const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons)
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log('hey')
        const cx = e.clientX;//document's x
        const cy = e.clientY;
        // console.log(cx,cy);
        const btntop = e.target.offsetTop;//element's top
        const btnleft = e.target.offsetLeft;
        // console.log(btntop, btnleft)

        const xinside = cx - btnleft;
        const yinside = cy - btntop;

        // console.log(xinside,yinside)
        //create circle 
        const  circle = document.createElement('span');
        circle.classList.add('circle'); 
        // console.log(circle);


        circle.style.top = yinside+'px';
        circle.style.left = xinside+'px';

        e.target.appendChild(circle);
        // this.appendchild(circle);// work only in regular function not work in arrow function
        setTimeout(()=>{
            circle.remove();

        }, 600)



    })
})