const showHideBox = () => {
    if(window.innerWidth <= 767){
        document.querySelector('.box_mobile').setAttribute('style','display:block')
        document.querySelector('.box_desktop').setAttribute('style','display:none')
    } else {
        document.querySelector('.box_mobile').setAttribute('style','display:none')
        document.querySelector('.box_desktop').setAttribute('style','display:block')
    }
}

window.addEventListener('resize', showHideBox)
window.addEventListener('load', showHideBox)



const isLogged = () => {
    if(document.cookie.includes('logged = true')) {
        document.querySelector('.logged_true').setAttribute('style','display:block')
        document.querySelector('.logged_false').setAttribute('style','display:none')
    } else {
        document.querySelector('.logged_true').setAttribute('style','display:none')
        document.querySelector('.logged_false').setAttribute('style','display:false')
        document.cookie = 'logged = true'
    }
}

window.addEventListener('load', isLogged)


// HomeWork
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html
// 2.
// Crear un div con un mensaje de
// “Este sitio se ve mejor en desktop”
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje
// utilizar css
// no usar inline styles