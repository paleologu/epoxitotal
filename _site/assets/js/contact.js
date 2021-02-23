



var contactFormHost = 'https://epoxitotalapi.herokuapp.com/',
form = $('#contact-form'),
notice = form.find('#notice');



console.log("Bla");


var btn = document.querySelector('#contactFormSubmit');
form.submit(function(ev){
  ev.preventDefault();
  btn.classList.add('disabled');
  btn.setAttribute('data-original', btn.textContent);
  btn.textContent = 'Se trimite...'; 
  $.ajax({
    type: 'POST',
    url: contactFormHost + 'messages',
    data: form.serialize(),
    dataType: 'json',
    success: function(response) {
      switch (response.message) {
        case 'success':
        form.fadeOut(function() {
          form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
        });
        break;

        case 'failure_email':
        notice.text(notice.data('error')).fadeIn();
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      notice.text(notice.data('error')).fadeIn();
    }
  });
});



