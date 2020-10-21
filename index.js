/* Let's Build: With JavaScript - Web-Crunch.com
   Subscribe on YouTube - https://youtube.com/c/webcrunch
   
   Let's Build: Off Canvas Menu 
*/

const menuOpen = document.querySelector('.top-nav .menu-open');
const menuClose = document.querySelector('.top-nav .menu-close');
const menuWrapper = document.querySelector('.top-nav .menu-wrapper');
const topBannerOverlay = document.querySelector('.top-banner-overlay');

function toggleMenu() {
    menuOpen.addEventListener('click', () => {
        menuWrapper.classList.toggle('is-opened');
        // topBannerOverlay.classList.add('is-moved');
    });

    // menuClose.addEventListener('click', () => {
    //     menuWrapper.classList.toggle('is-opened');
    //     // topBannerOverlay.classList.remove('is-moved');
    // });
}

toggleMenu();