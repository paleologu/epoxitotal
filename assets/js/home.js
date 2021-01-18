

jQuery(function($) {

  var _oldShow = $.fn.show;

  $.fn.show = function(speed, oldCallback) {
    return $(this).each(function() {
      var obj         = $(this),
          newCallback = function() {
            if ($.isFunction(oldCallback)) {
              oldCallback.apply(obj);
            }
            obj.trigger('afterShow');
          };

      // you can trigger a before show if you want
      obj.trigger('beforeShow');

      // now use the old function to show the element passing the new callback
      _oldShow.apply(obj, [speed, newCallback]);
obj.trigger('afterShow');
    });
  }
});
(function($){
    $(document).ready(function(){
        $('.map-container').css('min-height', $('div.footer-form').height()+'px');
        $('.contact .nice.button').click(function(e){
            $('.contact-button-container .nice.button').click();
        })
        var currentDay = new Date().getDay();
        $('.day-'+currentDay).css('font-weight','900');
        $('.day-'+currentDay+' td').css('color','white');
        if(currentDay == 7){
           $('.day.today.closed').toggleClass('hide');
           $('.day.today.open').toggleClass('hide');
        }
        $('.current-day .toggle-button').click(function(e){
           $('.week').toggleClass('hide');
           if(!$(e.target).hasClass('up')&& !$(e.target).hasClass('down')){
              $(e.target).addClass('up');
           } else {
              $(e.target).toggleClass('up');
              $(e.target).toggleClass('down');
           }
        })
        $('.adjust').css('width', $('.reference').css('width'));
        var basicHeight = $('.basic-info').css('height');
        $('#show-contact-form').click(function(e){
           $('.footer-form').addClass('slide-in');
           $('.footer-form').removeClass('slide-out');
           $('.basic-info').css('min-height',$('.footer-form').css('height'));
        })
        $('#hide-contact-form').click(function(e){
           $('.footer-form').addClass('slide-out');
           $('.footer-form').removeClass('slide-in');
           $('.basic-info').css('min-height',basicHeight);
        })
        $('.footer-form-response-output').bind('afterShow',function(){
           $('.basic-info').css('min-height',$('.footer-form').css('height'));
        })
    })
    window.onbeforeunload = function () {
        localStorage.setItem('your-name', document.getElementsByName('your-name').item(0).value);
        /*localStorage.setItem('prenume',document.getElementsByName('prenume').item(0).value);*/
        /*localStorage.setItem('companie',document.getElementsByName('companie').item(0).value);*/
        localStorage.setItem('your-email', document.getElementsByName('your-email').item(0).value);
        localStorage.setItem('your-phone', document.getElementsByName('your-phone').item(0).value);
        localStorage.setItem('your-message', document.getElementsByName('your-message').item(0).value);
    };
    (function ($) {
        jQuery('[name="your-name"]')[0].value = localStorage.getItem('your-name');
        /*       jQuery('[name="prenume"]')[0].value = localStorage.getItem('prenume');*/
        /*       jQuery('[name="companie"]')[0].value = localStorage.getItem('companie');*/
        jQuery('[name="your-email"]')[0].value = localStorage.getItem('your-email');
        jQuery('[name="your-phone"]')[0].value = localStorage.getItem('your-phone');
        jQuery('[name="your-message"]')[0].value = localStorage.getItem('your-message');
        $('.character-count').html(350 - $('[name="your-message"]').val().length)
        $('[name="your-message"]').on('change', function () {
            $('.character-count').html(350 - $('[name="your-message"]').val().length)
            if ((String)($('[name="your-message"]').val()).replace(/ /g, '') == "") {
                $('[name="your-message"]').val("");
            }
        });
        $('[name="your-message"]').on('keyup', function () {
            $('.character-count').html(350 - $('[name="your-message"]').val().length)
        })
        $('[name="your-message"]').on('keypress', function () {
            $('.character-count').html(350 - $('[name="your-message"]').val().length)
        })
    })(jQuery)
})(jQuery)