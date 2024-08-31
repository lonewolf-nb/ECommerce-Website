const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// for opening hamberger
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

//for closing hamberger
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
