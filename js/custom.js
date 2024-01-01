
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

  const UserName = document.getElementById('UserName');
  const SendBtn = document.getElementById('SendBtn');
  SendBtn.onclick = function(){
    const msgTextarea = document.getElementById('msgTextarea');
    const bussiness_Tatch = document.querySelector('.bussiness_Tatch form');
    // msgTextarea.innerHTML = `I'm Glad To do bussiness with You! ${UserName.value}` ;
    msgTextarea.innerHTML = "I'm Glad To do bussiness with You! (:";
    bussiness_Tatch.reset();
     setTimeout(function(){
    msgTextarea.innerHTML = "";
  },3000)
  }
 
  // const Toggle_Dark = document.querySelector('.Toggle_Dark');
//   const theme_icon = document.querySelector('#theme_Mood');
//   Toggle_Dark.onclick = function(){
//     document.body.classList.toggle('dark__Mood');
//     if(theme_icon.classList.contains('bi-moon')){
//       theme_icon.classList.remove('bi-moon');
//       theme_icon.classList.add('bi-sun');
//   }else if(theme_icon.classList.contains('bi-sun')){
//      theme_icon.classList.remove('bi-sun');
//      theme_icon.classList.add('bi-moon');
//   }
// }
$('.Toggle_Dark').click(function(){
 body.classList.toggle('dark__Mood');
  console.log('toggle the dark mood')
    if(theme_icon.classList.contains('bi-moon')){
      theme_icon.classList.remove('bi-moon');
      theme_icon.classList.add('bi-sun');
    }else if(theme_icon.classList.contains('bi-sun')){
      theme_icon.classList.remove('bi-sun');
      theme_icon.classList.add('bi-moon');
    }
})
