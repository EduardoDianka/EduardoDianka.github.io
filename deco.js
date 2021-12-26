let tera = document.querySelector('.enca');

const alnum = ()=>{let num = parseInt(Math.random()*255);return num;}
const fu = ()=>{tera.style.setProperty('color',`rgba(${alnum()},${alnum()},${alnum()},1)`);}
setInterval(fu,2900)
setTimeout(fu,1)
