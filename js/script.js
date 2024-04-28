// ハンバーガーメニュー

$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight(); 
  

  $("header button").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      $('.bar').toggleClass('cross'); 
      $('header nav').toggleClass('open'); 
      $('.burger-musk').fadeToggle(300); 
      $('body').toggleClass('noscroll'); 
    }else{
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('header nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight -50) {
       $('header h1').removeClass('black');
     }else {
       $('header h1').addClass('black');
     }

     if ($(window).scrollTop() < bgHeight -50) {
       $('header button').removeClass('black');
     }else {
       $('header button').addClass('black');
     }
  });
});
