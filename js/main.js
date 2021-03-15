$(function(){
    $('.truck__slider').slick({
        nextArrow:'<button class="slick-arrow slick-next"> <img src="images/next.svg" alt="next arrow"></button>',
        prevArrow:'<button class="slick-arrow slick-prev"> <img src="images/prev.svg" alt="prev arrow"></button>',

        arrows: true,
        dots: false,
        autoplay: false,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
              dots: true,
              arrows: false
              }
            }

        ]
    });
});


$(window).resize(function() {
  if ( $(window).width() < 1220){
    $('.reviws__item:nth-child(3)').addClass("hidden");
  } else {
    $('.reviws__item:nth-child(3)').removeClass("hidden");
  }
});

$(window).resize(function() {
  if ( $(window).width() < 860){
    $('.reviws__item:nth-child(2)').addClass("hidden");
    $('.prise__item:nth-child(1n+2)').addClass("hidden");
    $('.prise__item--btn').css("display", "block");
  } else {
    $('.reviws__item:nth-child(2)').removeClass("hidden");
    $('.prise__item:nth-child(1n+2)').removeClass("hidden");
    $('.prise__item--btn').css("display", "none");
  }
});

$('.reviws__btn--more').click(function(){
  $('.reviws__item').css("display", "block");
  $('.reviws__btn--more').css("display", "none");
  $('.off').css("display", "block");
});

$('.off').click(function(){
  $('.hidden').css("display", "none");
  $('.reviws__btn--more').css("display", "block");
  $('.off').css("display", "none");
});

$('.prise__item--btn').click(function(){
  $('.prise__item').css("display", "block");
  $('.prise__item--btn').css("display", "none");
});
