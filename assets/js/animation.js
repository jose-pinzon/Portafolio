
document.addEventListener('DOMContentLoaded', () => {

 let myName = document.querySelector('.info__myname')
 let carrer = document.querySelector('.info__carrer')

 myName.addEventListener('animationend', () => {
    myName.style.border = 'none'
    carrer.style.display = 'inline-block'
    carrer.style.animation = 'escribir2 2s steps(50)'
 })

 carrer.addEventListener('animationend', () => {
    carrer.style.animation = 'efecto .5s step-end infinite alternate'
 })


  // !Animacion para la parte de informacion











})
    