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