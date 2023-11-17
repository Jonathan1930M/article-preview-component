const iconShare = document.querySelector('.icon-share');
const rrssMenu = document.querySelector('#container-rrss');
const iconShareMobile = document.querySelector('#icon-share');

iconShare.addEventListener('click', deactiveMenurrss);
iconShareMobile.addEventListener('click', deactiveMenuMobile);

function deactiveMenurrss() {
    rrssMenu.classList.toggle('inactive');
}

function deactiveMenuMobile() {
    rrssMenu.classList.toggle('inactive');
}