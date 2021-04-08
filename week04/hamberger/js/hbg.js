const menuOpenE1 = document.getElementById('btn--open')
const menuCloseE1 = document.getElementById('btn--close')
const sideMenuE1 = document.getElementById('side__menu')

menuOpenE1.addEventListener("click", function() {
    menuOpenE1.style.display='none'
    menuCloseE1.style.display='block'
    sideMenuE1.style.transform = 'translateX(0%)'
})

menuCloseE1.addEventListener("click", function() {
    menuOpenE1.style.display='block'
    menuCloseE1.style.display='none'
    sideMenuE1.style.transform = 'translateX(-100%)'
})
