const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, index) => {
  // console.log(code.value);
  code.addEventListener("keydown", (e) => {
    console.log(e.value);
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      if (index !== 5) {
        setTimeout(() => codes[index + 1], 10);
      }
    } else {
      setTimeout(() => codes[index - 1], 10);
    }
  });
});
