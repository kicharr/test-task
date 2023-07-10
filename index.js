var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 160,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';
    console.log();
    return direction;
}


function showContent1() {
    !slide1.style.cssText || slide1.style.cssText === 'display: none;' ? slide1.style.cssText = 'display: block;' : slide1.style.cssText = 'display: none;'
}

function showContent2() {
    !slide2.style.cssText || slide2.style.cssText === 'display: none;' ? slide2.style.cssText = 'display: block;' : slide2.style.cssText = 'display: none;'
}

function showContent3() {
    !slide3.style.cssText || slide3.style.cssText === 'display: none;' ? slide3.style.cssText = 'display: block;' : slide3.style.cssText = 'display: none;'
}
