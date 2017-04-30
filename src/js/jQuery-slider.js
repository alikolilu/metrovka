(function( $ ) {
  $.fn.mySlider = function() {

    var metrovkaSlider = {
      infinet: true,
      index: 0,
      slidesVisible: 1,
      slidesToScroll: 1;
      arrows: true,
      swipeAble: true,
      pagination: true,
      autoplay: true,
      autoplaySpeed: 1000
  };
  
    var settings = $.extend({}, metrovkaSlider, settings);
    var part = this;
    var partWidth = 202;
    var slides = $('.slide');
    var numberofElem = length.slides;
      $('#slidesContainer').css('left','0px');
      $('#slidesContainer').css('position','relative');
      $('#slidesContainer').css('width','partWidth*numberofElem');
   

    slidesVisible = part.width/partWidth>>0;
      $('<span class ="control_next">Next</span>').appendTo('#slidesShow');
      $('<span class = "control_prev">Prev</span>').prependTo('#slidesShow');
     
 $('.control_next').click(function(){
              $('#slidesContainer').animate({
                left: -partWidth
               }, 1000, function(){
                 $('#slidesContainer>div:first-child').appendTo('#slidesContainer');
                 settings.index != 0
               ? settings.index-1 : settings.index = numberofElem-1;
                $('#slidesContainer').css('left','0px')
                });
             }); 
    $('.control_prev').click(function(){
                $('#slidesContainer').animate({
                left: +partWidth    
               }, 1000, function(){
              $('#slidesContainer>div:last-child').prependTo('#slidesContainer');
                 settings.index != numberofElem-1
               ? settings.index+1 : settings.index = 0;
                  $('#slidesContainer').css('left','0px')

               });
             });

$( window ).on( "swipe", function( event ) { 
  var swipestart = touchstart(x);
  var swipeend = touchend(x);
  $('slidesContainer').animate({
    left: +swipestart-swipeend
  }, 1000, function(){
    for(var i = 1; i<=math.abs((swipestart-swipeend)/partWidth >>0); i++){
      if ((swipestart-swipeend)<0){
        $('#slidesContainer').animate({
                left: -partWidth
               }, 1000, function(){
                 settings.index != 0
               ? settings.index-1 : settings.index = numberofElem-1;
                $('#slidesContainer>div:first-child').appendTo('#slidesContainer');
                $('#slidesContainer').css('left','0px')
                   })
      }else{
        $('#slidesContainer').animate({
                left: +partWidth
               }, 1000, function(){
                 settings.index != numberofElem-1
               ? settings.index+1 : settings.index = 0;
                $('#slidesContainer>div:last-child').prependTo('#slidesContainer');
                $('#slidesContainer').css('left','0px')
               });
      };
    };
  });
} );
        


$('#slidesContainer').mouseout(function(){
  setInterval(function () {
    $('#slidesContainer').animate({
                left: -partWidth
               }, 1000, function(){
                 settings.index != 1
               ? settings.index-1 : optionsindex = numberofElem;
                 $('#slidesContainer>div:first-child').appendTo('#slidesContainer');
                 $('#slidesContainer').css('left','0px')
               })
  }, settingss.autoplaySpeed);
});
  };

})(jQuery);

