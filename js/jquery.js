// //Preloader Prinner
$(document).ready(() => {
  setTimeout(() => {
    $('div#loader-wrapper').addClass('loaded');
  }, 1000);
});


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
$('ul.all_boxes').carouFredSel({
  responsive: true,
  width: '70%',
  prev: "#prev",
  next: "#next",
  direction: "left", 
  scroll: {
      items: 1,
      duration: 500,
      easing: "linear",
    },
    auto:false,
  items: {
      visible: 1,
      minimum: 2,
  },
  pagination: {
      container: ".slider_images",
      anchorBuilder: false
    }
})



  //////////////////////////////////////////////////////////
  ///////////// Project Section PopUps
  //////////////////////////////////////////////////////////
  //Peoject Section

//   let aElements = document.querySelectorAll(".project > div.show > a");

  $(document).ready(() => {
//     $(".project div.show a").on("click", ()=> {
//       $(".popup").removeClass("close");
//       $(".popup").addClass("open");
//     })

    $(".popup__close").on("click", ()=> {
      $(".popup").removeClass("open");
      $(".popup").addClass("close");
    })
  })

// console.log(aElements);