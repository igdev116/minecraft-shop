// fix hover error of notification's text in nav bar
let notifyNav = document.querySelector('.header__navbar-item--has-notify'); // get the element of notification in nav bar
let notifyText = document.querySelector('.header__navbar-item-link'); // get the element of notification's text in nav bar

notifyNav.onmouseover = () => {
    notifyText.style.color = 'rgba(255, 255, 255, 0.7)';
}

notifyNav.onmouseout = () => {
    notifyText.style.color = 'white';
}

// complete