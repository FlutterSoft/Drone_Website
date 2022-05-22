const toggler = document.querySelector('#menuToggler')
const mobileMenu = document.querySelector('.mobileNav')
const mobileNavs = document.querySelectorAll('.mobileNavLink')

toggler.addEventListener('click', function(){
    this.classList.toggle('isActive')
    mobileMenu.classList.toggle('isActive')
})
