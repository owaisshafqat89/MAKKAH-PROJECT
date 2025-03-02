// swiper
var swiper = new Swiper(".mySwiper", {
    speed: 5000,
    slidesPerView: 1,
    loop: true,
    autoplay:
    {
        delay: 2000,
        disableOneInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// scrolll top button

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const circle = document.querySelector('.circle-of-the-section-one');
    circle.styles.transform = `translateY(${scrollPosition * 0.2}px)`;
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const btn = document.getElementById("scrollBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.add("show");
        btn.classList.remove("hide");
    } else {
        btn.classList.add("hide");
        setTimeout(function () {
            btn.classList.remove("show");
        }, 700);
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// slick
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//counter
$('.counter').counterUp({
    delay: 20,
    time: 3000
});