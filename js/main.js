$(function () {
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./img/content/arow-L.svg" alt=""></button>',
        nextArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./img/content/arow-R.svg" alt="" ></button> ',
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    arrows: false
                }
            }]

    });

    $(".tab").on("click", function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass("tab--active");
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass("tabs-content--active");

        $(this).addClass("tab--active");
        $($(this).attr("href")).addClass("tabs-content--active");

        $('.product-slider').slick('setPosition');

    });


    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./img/content/arow-L_black.svg" alt=""></button>',
        nextArrow:
            '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./img/content/arow-R_black.svg" alt="" ></button> ',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });


    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(300)
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        step: 10000,

    });


    $('.catalog__filter-btngrid').on('click', function () {
        // $('.catalog__filter-button').toggleClass('catalog__filter--active ')
        $(this).addClass('catalog__filter--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter--active');
        $('.poroduct-item__wrapper').removeClass('poroduct-item__wrapper--line');
    });

    $('.catalog__filter-btnline').on('click', function () {
        // $('.catalog__filter-button').toggleClass('catalog__filter--active ')
        $(this).addClass('catalog__filter--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter--active');
        $('.poroduct-item__wrapper').addClass('poroduct-item__wrapper--line');
    });


    $(".rate-Yo").rateYo({
        normalFill: "#c4c4c4",
        ratedFill: "#1c62cd",
        fullStar: false,
        spacing: '7px',
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });


    $('.footer__topdrop').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active')
    });

    $('.asside__btn').on('click', function () {
        $(this).next().slideToggle();
    });
});
