const counters = document.querySelectorAll('.counter');//querySelectorAll returns all elements in the document that matches a specified CSS selector(s).
// console.log(counter);
counters.forEach(counter=>{
// console.log(counter);
counter.innerText='0';
// to display in html from js use innerText
const updatecounter = ()=>{
    // console.log("hay");
    // + sign is use to change string value to number 
    //get attribute is use to get the attribute data-target from HTML
    const target = +counter.getAttribute('data-target');
    // console.log(target);
    // console.log(typeof target, target);
    // Number has same output as using of + sing
    const ctr = Number(counter.innerText);
    // console.log(typeof ctr,ctr);
    // (100 is as you like, we can devide what we want)
    const increment = target/100;
    // console.log(increment);

    if(ctr<target){
        // Math.ceilis use to maximaize the double value
        counter.innerText =ctr+ increment; 
        //speed that we wanna display
        setTimeout(updatecounter,5);
    }
    
};
// function ko a loke loke chin yin d lo pyan yay pay ya tl tae :-)
updatecounter();

});