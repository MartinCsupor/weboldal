function myFunction() {
    document.getElementById("ar1").innerHTML = "65 000Ft";
}

function myFunction1() {
    document.getElementById("ar1").innerHTML = "75 000Ft";
}

function myFunction2() {
    document.getElementById("ar1").innerHTML = "85 000Ft";
}

document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}