var rangeSlider = document.getElementById("range-slider");

var rangeLabel = document.getElementById("range-label");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeLabel.innerHTML = rangeSlider.value;
  var labelPosition = (rangeSlider.value /rangeSlider.max);

  if(rangeSlider.value === rangeSlider.min) {
 rangeLabel.style.left = ((labelPosition * 100) + 2) + "%";
  } else if (rangeSlider.value === rangeSlider.max) {
 rangeLabel.style.left = ((labelPosition * 100) - 2) + "%";
  } else {
  rangeLabel.style.left = (labelPosition * 100) + "%";
  }
}