const toggle = document.querySelector('.ham-button')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav-visible')
})

window.onscroll = function(){
    scrolling()
}

function scrolling(){
    if(document.body.scrolltop >= 300 || document.documentElement.scrollTop >= 300){
        document.getElementById("scrollBtn").style.display = "block";
    }else {
        document.getElementById('scrollBtn').style.display = 'none';
    }
}

function headerDisplay(){
    if(document.body.scrolltop >= 10){
        document.getElementsById("header").style.display = "none"
    }
}