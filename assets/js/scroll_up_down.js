document.addEventListener('DOMContentLoaded', () => {

  // ?Animacion prueba

  const option = {
    root:null,
    rootMargin:'0px',
    threshold:0.5 /* Significa que apenas se vea el pixel de llamara el callback con 0  ,con 1 se tendra que ver casi todo el elemento */
  }
  function callback(entries){
    entries.forEach(entry => {
        const caja = entry.target

        if (entry.isIntersecting) {
            caja.classList.add('show' ) /* isIntersecting = si es true, el elemento se esta mostrando */
        }
    });

  }

  const observer = new IntersectionObserver(callback, option)
  const seccionesOcultas = document.querySelectorAll('.hidden')


  seccionesOcultas.forEach( element => observer.observe(element))

  //! Navar fijo


    const links = document.querySelectorAll('.nav__item--link')

    window.addEventListener('scroll', () =>{
      let scroll = window.scrollY;

    if (scroll > 700 ) {
        menu__navar.classList.add('menu__navar--fixed')

        links.forEach(  link => {
          link.classList.add('nav__item--a')
        })

    }else{

      links.forEach(  link => {
        link.classList.remove('nav__item--a')
      })
        menu__navar.classList.remove('menu__navar--fixed')
    }
})

})

