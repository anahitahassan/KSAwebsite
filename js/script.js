//Getting things ready!

$(function () {

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });


  //Flickity Carousel Options
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    adaptiveHeight: true

  });



  //Email Validation
  $('form').on('click', 'button', function (event) {
    event.preventDefault();

    var email = $('input').val();
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    event.preventDefault();
    console.log('User submitted the email address ' + email);

    if (filter.test(email)) {
      alert('Thank you for subscribing, ' + email + '!');

    } else {
      alert('Please enter a valid E-Mail address.');
    }

  });

  //Updating Cart
  $('.carousel-cell').on('click', 'button', function (event) {
    event.preventDefault;

    var item = parseInt($(".count p").text(), 10);
    $('.count p').html(item = item + 1);
  });
});

