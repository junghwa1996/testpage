$(function(){
    mainslide();
});


function mainslide(){
    var swiper = new Swiper('.swiper_main', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          loop: true,
      });
}