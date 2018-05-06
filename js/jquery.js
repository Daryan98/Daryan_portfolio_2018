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



////////////////////////////
// SKills section content text

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 1700) {
    $("div.skill_content").addClass("animate-to-top");
  } else {
    $("div.skill_content").removeClass("animate-to-top");

  }
});

///////////////////////////////////////////
// Random Section skills_header_slider
////////////////////////////////////////
$(document).ready(function () {
  var slider = $('.random_slider').lightSlider({
    item: 4,
    loop: false,
    slideMove: 1,
    slideMargin: 10,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,

    responsive: [{
        breakpoint: 1000,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 700,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });
  $('.slider_wrap #prev').click(function () {
    slider.goToPrevSlide();
  });

  $('.slider_wrap #next').click(function () {
    slider.goToNextSlide();
  });
});


///////////////////////////////////////////
// Skills section
////////////////////////////////////////

// SKills Header
$(document).ready(function () {
  var slider = $('.skills_header_slider').lightSlider({
    item: 2,
    slideMargin: 0,
    loop: false,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    pager: true,

    responsive: [{
      breakpoint: 625,
      settings: {
        item: 1,
        slideMove: 1,

        // slideMargin:6,
      }
    }, ]
  })
})


// skills
$(document).ready(function () {
  var slider = $('.skills ul.developemnt_skill').lightSlider({
    item: 5,
    loop: false,
    // slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,

    responsive: [{
        breakpoint: 1200,
        settings: {
          item: 4,
          slideMove: 1,
          slideMargin: 0,
        }
      },
      {
        breakpoint: 900,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 0,
        }
      },
      {
        breakpoint: 680,
        settings: {
          item: 2,
          slideMove: 1
        }
      },
      {
        breakpoint: 460,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });
  $('.slider_wrap #prev').click(function () {
    slider.goToPrevSlide();
  });

  $('.slider_wrap #next').click(function () {
    slider.goToNextSlide();
  });
});


$(document).ready(function () {
  var skills_slider = $('.skills ul.design_skill').lightSlider({
    item: 3,
    loop: false,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,

    responsive: [
      {
        breakpoint: 680,
        settings: {
          item: 2,
          slideMove: 1
        }
      },
      {
        breakpoint: 460,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });
  $('.slider_wrap #prev').click(function () {
    skills_slider.goToPrevSlide();
  });

  $('.slider_wrap #next').click(function () {
    skills_slider.goToNextSlide();
  });
});





///////////////////////////////////////////
//profiles section
////////////////////////////////////////
$(document).ready(function () {
  var slider = $('.profiles_crousel').lightSlider({
    item: 4,
    adaptiveHeight: true,
    slideMargin: 10,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    loop: false,
    pager: true,
    responsive: [{
      breakpoint: 1300,
      settings: {
        item: 3,
        slideMove: 1,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 1035,
      settings: {
        item: 2,
        slideMove: 1,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 550,
      settings: {
        item: 1,
        slideMove: 1
      }
    }
  ]

  });
  $('#profiles_section #prev').click(function () {
    slider.goToPrevSlide();
  });

  $('#profiles_section #next').click(function () {
    slider.goToNextSlide();
  });
})