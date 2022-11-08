const hideBtn = document.querySelector('.fa-times')
const showBtn = document.querySelector('.fa-bars')
const navLink = document.querySelector('.nav-links')


showBtn.addEventListener('click', showMenu)
hideBtn.addEventListener('click', hideMenu)

function showMenu(){
    navLink.style.right = 0;
}
function hideMenu(){
    navLink.style.right = '-200px';
}

// bluring function

const header = document.querySelector('.header')
const loadingText = document.querySelector('.loader-text')
let load  = 0

let loading =  setInterval(function bluring(){
    load++

    if(load>99){
        clearInterval(loading)
    }

    loadingText.textContent =  `${load}%`;
    loadingText.style.opacity = scale(load,  0, 100, 1, 0);
    header.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`


},  30)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


