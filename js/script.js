const card = document.querySelectorAll('.card1'),
    card1 = document.querySelectorAll('.card2'),
    next = document.querySelector('.iconarrow1'),
    back = document.querySelector('.iconarrow'),
    slides = document.querySelectorAll('.slide'),
    slidesWrapper = document.querySelector('.sliderWrapper'),
    slidesInner = document.querySelector('.sliderInner'),
    width = window.getComputedStyle(slidesWrapper).width,
    scrollinfo = document.querySelectorAll('.animationItem');

let slideIndex = 1;
let offset = 0;

slidesInner.style.width = 100 * slides.length + '%';

slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
});
back.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesInner.style.transform = `translateX(-${offset}px)`;
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll('#prlximg').forEach(layer => {
        const speed = layer.getAttribute('data-value');

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerWidth - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
animationScrol();
window.addEventListener('scroll', () => {
    animationScrol();
});

function animationScrol() {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollinfo.forEach(i => {
        let scrollOffset = i.offsetTop + (i.offsetHeight / 2);
        if (windowCenter >= scrollOffset) {
            i.classList.add('animationClass');
        } else {
            i.classList.remove('animationClass');
        }
    });
}
//Можно было сделать так, но у меня почему лагает открытие/анимация при таком варианте...
//$('.card1').hover(function () {
//    if ($(this).hasClass("active", "1")) {
//        $(this).find('.bottom').slideUp(function () {
//            $('.card1').removeClass("active");
//        });
//    } else {
//        $(this).addClass("active");
//        $(this).find('.bottom').stop().slideDown();
//    }
//});


$('.card1').hover(function () {
    if ($(this).hasClass("active", "1")) {
        $('.card1 .bottom').slideUp(function () {
            $('.card1').removeClass("active");
        });
    } else {
        $('.card1').addClass("active");
        $('.card1 .bottom').stop().slideDown();
    }
});

$('.card2').hover(function () {
    if ($(this).hasClass("active", "1")) {
        $('.card2 .bottom').slideUp(function () {
            $('.card2').removeClass("active");
        });
    } else {
        $('.card2').addClass("active");
        $('.card2 .bottom').stop().slideDown();
    }
});
$('.card3').hover(function () {
    if ($(this).hasClass("active", "1")) {
        $('.card3 .bottom').slideUp(function () {
            $('.card3').removeClass("active");
        });
    } else {
        $('.card3').addClass("active");
        $('.card3 .bottom').stop().slideDown();
    }
});
$('.card4').hover(function () {
    if ($(this).hasClass("active", "1")) {
        $('.card4 .bottom').slideUp(function () {
            $('.card4').removeClass("active");
        });
    } else {
        $('.card4').addClass("active");
        $('.card4 .bottom').stop().slideDown();
    }
});
$('.card5').hover(function () {
    if ($(this).hasClass("active", "1")) {
        $('.card5 .bottom').slideUp(function () {
            $('.card5').removeClass("active");
        });
    } else {
        $('.card5').addClass("active");
        $('.card5 .bottom').stop().slideDown();
    }
});