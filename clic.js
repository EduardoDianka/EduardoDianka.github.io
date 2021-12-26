let principalCorazones = document.querySelectorAll('.prin__cora');
let cons = document.querySelector('.cons');
let secines = document.querySelectorAll('.secio');

let cerrar = document.querySelector('.cerrar')

let num = 0;

cerrar.addEventListener('click',()=>{
    cons.classList.remove('consactivo')
    for (let i = 0; i < secines.length; i++) {
        secines[i].classList.remove('secioactivo')        
    }
})

const fun = (corazones,num)=>{
    x = parseInt(Math.random()*90);
    y = parseInt(Math.random()*90);
    corazones[num].style.setProperty('top',`${x}%`);
    corazones[num].style.setProperty('left',`${y}%`);
    corazones[num].style.setProperty('transform',`translate(-${y}%,-${x}%)`);
}

for (let i = 0; i < principalCorazones.length; i++) {
    principalCorazones[i].addEventListener('click',()=>{
        num = i;
        cons.classList.add('consactivo')
        secines[num].classList.add('secioactivo')
        fun(principalCorazones,num)
    })
}


