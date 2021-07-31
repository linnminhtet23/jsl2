//UI
const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  // console.log(e.target);
  // console.log('hey');
  const value = +e.target.value; //+is change to number

  const label = e.target.nextElementSibling;
  const rangewidth = getComputedStyle(e.target).getPropertyValue("width"); //to get the width of slide
  const labelwidth = getComputedStyle(label).getPropertyValue("width");
  // console.log(rangewith);
  // console.log(rangewith.length);
  // console.log(labelwith);

  const numberrangewidth = rangewidth.substring(0, rangewidth.length - 2);
  // console.log(numberrangewidth);
  const numberlabelwidth = labelwidth.substring(0, labelwidth.length - 2);
  // console.log(numberlabelwidth);
  const min = +e.target.min;
  const max = +e.target.max;
  // console.log(min,max);

  const leftright =
    value * (numberrangewidth / max) -
    (numberlabelwidth / 2 )+
    scale(value, min, max, 10, -10); //formula
  console.log(leftright);
  label.style.left = `${leftright}px`;
  label.textContent = value;
});

const scale = (num, inmin, inmax, outmin, outmax) => {
  return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
};
