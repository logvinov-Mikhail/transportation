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
  if ( $(window).width() < 860){
    $('.block-test').addClass("block__hidden");
  } else {
    $('.block-test').removeClass("block__hidden");
  }
});

$('.one').click(function(){
  $('.block__hidden').css("display", "block");
  $('.one').css("display", "none");
  $('.off').css("display", "block");
});

$('.off').click(function(){
  $('.block__hidden').css("display", "none");
  $('.one').css("display", "block");
  $('.off').css("display", "none");
});

