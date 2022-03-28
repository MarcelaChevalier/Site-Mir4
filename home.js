const Bars =document.querySelector('.fa-bars')
const Close=document.getElementById('close')
const Menureponsive =document.querySelector('.menu-reponsive')
console.log(Close)
Close.addEventListener('click',()=>{
    Menureponsive.classList.toggle('active')
    })
Bars.addEventListener('click',()=>{
Menureponsive.classList.toggle('active')
})