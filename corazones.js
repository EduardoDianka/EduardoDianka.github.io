let corazonesRotar = document.querySelectorAll('.rotar__cora')
let corazonesPalpitar = document.querySelectorAll('.palpi__cora');
let corazonesMulti = document.querySelectorAll('.multi__cora');
let moverCora = document.querySelectorAll('.mover__cora');

const funPosi = (corazones)=>{
    for (let i = 0; i < corazones.length; i++) {
        x = parseInt(Math.random()*90);
        y = parseInt(Math.random()*90);
        corazones[i].style.setProperty('top',`${x}%`);
        corazones[i].style.setProperty('left',`${y}%`);
        corazones[i].style.setProperty('transform',`translate(-${y}%,-${x}%)`);
    }
}


setInterval(() => {funPosi(moverCora);}, 8000);

setTimeout(() => {funPosi(moverCora);}, 1);

funPosi(corazonesPalpitar);
funPosi(corazonesRotar);
funPosi(corazonesMulti)