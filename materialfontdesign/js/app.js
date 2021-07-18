const labels =document.querySelectorAll('.form-control label');
labels.forEach((label) => {
    // console.log(label);
    // console.log(label.innerText)

    label.innerHtml = label.innerText.split('').map((letter, index)=>`<span style="transition-delay: ${index *50}ms">${letter}</span>`).join('');
});