window.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.btn'),
        inputIn = document.querySelector('.input-in'),
        out = document.querySelector('.out');
    

    btn.addEventListener('click', function () {
        console.log(inputIn.value);
        out.innerHTML = inputIn.value;
        inputIn.value = '';
    })
})