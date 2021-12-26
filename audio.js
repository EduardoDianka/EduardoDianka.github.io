let au = document.querySelector('.au');

let pricora = document.querySelectorAll('.prin__cora');

let un = false;

const mudo = ()=>{au.muted = true;document.querySelector('.mudo_alto').innerHTML = '<div class="mudo"><i class="fas fa-volume-mute"></i></div>';}
const alto = ()=>{au.muted = false;document.querySelector('.mudo_alto').innerHTML = '<div class="alto"><i class="fas fa-volume-up"></i></div>';}
document.querySelector('.mudo_alto').addEventListener('click',()=>{if(au.muted == false){mudo();}else{alto();}});

const correr = ()=>{au.play();document.querySelector('.pay_pau').innerHTML = '<div class="pau"><i class="fas fa-pause-circle"></i></div>';};
const parar = ()=>{au.pause();document.querySelector('.pay_pau').innerHTML = '<div class="play"><i class="fas fa-play"></i></div>';}
document.querySelector('.pay_pau').addEventListener('click',()=>{if(!au.paused){parar()}else{correr()}});

pricora[11].addEventListener('click',()=>{
    if(un == false) correr()
    un = true
})

