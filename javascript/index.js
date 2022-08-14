let menuBtn = document.querySelector('.hamburger-btn');
let navList= document.querySelector('.nav-items');

menuBtn.addEventListener('click', ()=>{
    navList.classList.toggle('activate');
})