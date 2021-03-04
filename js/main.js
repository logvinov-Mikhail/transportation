$(function(){

    $('.truck__slider').slick({
        nextArrow:'<button class="slick-arrow slick-next"> <img src="images/next.svg" alt="next arrow"></button>',
        prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/prev.svg" alt="prev arrow"></button>',

        arrows: true,
        dots: false,
        autoplay: false,
        fade: true,
        responsive: [
            // {
            //     breakpoint: 441,
            //     settings: {
            //         arrows: false
            //     }
            // }
        ]
    });

    // $('.reviews__slider').slick({
    //     arrows: false,
    //     dots: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1141,
    //             settings: {
    //                 slidesToShow: 3,
    //           }
    //         },
    //         {
    //             breakpoint: 846,
    //             settings: {
    //                 slidesToShow: 2,
    //           }
    //         },
    //         {
    //             breakpoint: 585,
    //             settings: {
    //                 slidesToShow: 1,
    //           }
    //         },
    //     ]
    // });

    // $('.menu__btn').on('click', function(){
    //     $('.menu__list').toggleClass('menu__list--active');
    // })

});