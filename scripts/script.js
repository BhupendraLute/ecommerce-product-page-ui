
// ---------------------- For customer reviews card scroll controll ---------------
const reviewContainer = document.querySelector('#customer-feed-cards');
const scrollReviewsLeft = document.querySelector('.scroll-review-left');
const scrollReviewsRight = document.querySelector('.scroll-review-right');

// Scroll left
scrollReviewsLeft.addEventListener('click', () => {
    reviewContainer.scrollBy({
        left: -330,
        behavior: 'smooth'
    });
});

// Scroll right
scrollReviewsRight.addEventListener('click', () => {
    reviewContainer.scrollBy({
        left: 330,
        behavior: 'smooth'
    });
});


// ---------------------- For similar products card scroll controll ---------------
const productsContainer = document.querySelector('#similar-products-cards');
const scrollProductsLeft = document.querySelector('.scroll-products-left');
const scrollProductsRight = document.querySelector('.scroll-products-right');

// Scroll left
scrollProductsLeft.addEventListener('click', () => {
    productsContainer.scrollBy({
        left: -330,
        behavior: 'smooth',
    });
});

// Scroll right
scrollProductsRight.addEventListener('click', () => {
    productsContainer.scrollBy({
        left: 330,
        behavior: 'smooth'
    });
});


// for mobile navbar
const mobileSidebar = document.querySelector('#mobile-sidebar');
const mobileMenuBtn = document.querySelector('#menu-btn');
const mobileMenuBtnIcon = document.querySelector('#menu-btn-icon');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileSidebar.classList.contains("hidden")) {
        mobileSidebar.classList.remove('hidden');
        mobileMenuBtnIcon.classList.remove('fa-bars');
        mobileMenuBtnIcon.classList.add('fa-xmark');
    } else {
        mobileSidebar.classList.add('hidden');
        mobileMenuBtnIcon.classList.remove('fa-xmark');
        mobileMenuBtnIcon.classList.add('fa-bars');
    }
});