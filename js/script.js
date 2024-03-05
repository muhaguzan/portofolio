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

const scriptURL = 'https://script.google.com/macros/s/AKfycbw7QwzbZWA3e7xpDOL_Or95tGsL-uH38k-097QNVp2M3IfH3tx5-dWuWT62R7QRO4o8mg/exec'
        const form = document.forms['contact-form']
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const myAlert = document.querySelector('.myalert');
        
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          btnLoading.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');

          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                btnLoading.classList.toggle('hidden');
                btnKirim.classList.toggle('hidden');
                myAlert.classList.toggle('hidden')
                console.log('Success!', response)
                form.reset();
        })
            .catch(error => console.error('Error!', error.message))
        })

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navmenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});