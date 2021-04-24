const headerEl=document.getElementById('header')
//로고 이미지 선택자//
const adEl  = document.getElementById('ad')

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        headerEl.style.height='20px'
        adEl.style.height='106px'
        adEl.style.width='320px'
    } else{
        headerEl.style.height='60px'
        adEl.style.height='320px'
        adEl.style.width='960px'

    }
})