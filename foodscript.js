function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu) {
        var computedStyle = window.getComputedStyle(mobileMenu);
        var isMenuVisible = computedStyle.display !== 'none';

        mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    } else {
        console.error('Mobile menu not found');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }
    // Your other event listeners or functions can go here
});
