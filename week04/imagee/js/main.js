const headerE1 = document.getElementById('header--main')
const logoE1 = document.getElementById('logo')

window.addEventListener("scroll", function(){
    if(window.scrollY>=200){
        headerE1.style.height='160px'
        logoE1.style.height='120px'
        logoE1.style.width='120px'
    }
    else{
        headerE1.style.height='400px'
        logoE1.style.height='300px'
        logoE1.style.width='300px'
    }
})