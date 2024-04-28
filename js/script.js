// navbarfixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

function sendMessage() {
    const urlwa = `https://wa.me/6285775573114?text=Hallo Guzan,%0ANama saya *${nama.value}*%0AEmail saya ${email.value}%0A%0APesan:%0A*${pesan.value}*`;

   window.open(urlwa, "_blank");
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navmenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});