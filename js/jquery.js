// // //Preloader Prinner
// $(document).ready(() => {
//   setTimeout(() => {
//     $('div#loader-wrapper').addClass('loaded');
//   }, 1000);
// });


  //////////////////////////////////////////////////////////
  ///////////// Navbar
  //////////////////////////////////////////////////////////
// Navbar Position Fix on scroll
var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > num) {
    $('nav').addClass('fixed');
  } else {
    $('nav').removeClass('fixed');
  }
});



// Navbar On click Animation to the sectiion

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //////////////////////////////////////////////////////////
  ///////////// Profiles Section Croufredsel
  //////////////////////////////////////////////////////////
///Profiles Section
// $('ul.all_boxes.slider').carouFredSel({

//   width: "100%",
//   responsive: true,
//   width: '70%',
//   prev: "#prev",
//   next: "#next",
//   // direction: "left", 
//   scroll: {
//       items: 1,
//       duration: 300,
//       easing: "linear",
//     },
// 		auto: false,
//   items: {
//       visible: 1,
//       minimum: 1,
//   },
//   pagination: {
//       container: ".slider_images",
//       anchorBuilder: false
//     }
// })


//////////////////////////////////////////////
//Contact Form 
//////////////////////////////////////////////
// $(document).ready(function() {
//   $('#contact-form').submit(function(e) {
//     var name    = document.getElementById('input-name')
//     var email   = document.getElementById('input-email')
//     var message = document.getElementById('input-message')

//     if (!name.value || !email.value || !message.value) {
//       alertify.error("Please check your entries");
//       return false;
//     } else {
//       $.ajax({
//         method: 'POST',
//         url: 'https://formspree.io/daryankf@outlook.dk',
//         data: $('#contact-form').serialize(),
//         datatype: 'json'
//       });
//       e.preventDefault();
//       $(this).get(0).reset();
//       alertify.success("Message sent");
//     }
//   });
// });