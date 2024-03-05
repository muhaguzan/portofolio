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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxmmGLlxjEbhN6N0DjR1xbu5Xug7sUojorQH_vbzHZhQLS07WMX_lCkylK4ztI58P53/exec'
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