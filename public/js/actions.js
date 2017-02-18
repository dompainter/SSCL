function onImageClick(image, modalId){
	$('.focus-img').attr('src', image);
}

$('body').prepend('<a href="#" class="back-to-top"></a>');

var amountScrolled = 150;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

// REVEAL ITEMS
var srOptions = { duration: 800 }
window.sr = ScrollReveal();

$('.port-img').each(function(index){
	sr.reveal(this, { duration: 800 }, 50)
})

$('.headline-title i').each(function(index){
	sr.reveal(this, {
		duration: 1000,
		origin: 'top',
		// scale: 4.2,
    delay: 400,
		// rotate: {x:0, y: 180, z:0},
	  distance: '100px'
	})
})

// SET UP PORTFOLIO GRID
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// PROJECTS LIGHTBOX
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'disableScrolling': true
});

$(document).ready(function(){

  // AUTO SET BANNER HEIGHT
  function setHeight(){
    var windowHeight = $(window).height();
    if($('.gallery-wrapper').length > 0) {
      $('.gallery-wrapper').css('height', windowHeight)
    } else {
      var footerHeight = $('.footer').css('height').replace(/[^-\d\.]/g, '')
      windowHeight = windowHeight - footerHeight
      $('.error-wrapper').css('height', windowHeight)
    }
  }

  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  // HOVER DROPDOWN MENU
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

  $('ul.nav li.dropdown').click(function() {
    $(this).toggleClass('open');
  });

  $('.scroll').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });

  // Scroll on click of arrow
  var aboutSection = $('.about-section');
  var projectInfo = $('#project-info');
  $(".hvr-icon-hang").click(function() {
    if(aboutSection.length > 0) {
      $('html, body').animate({
          scrollTop: aboutSection.offset().top - 55
      }, 1000);
    } else {
      $('html, body').animate({
          scrollTop: projectInfo.offset().top - 55
      }, 1000);
    }

  });

  //On page load, set navbar class based on position
  var scrollOnLoad = $(window).scrollTop();
  var windowHeightOnLoad = $(window).height() - 50;

  setNavClass(scrollOnLoad, windowHeightOnLoad);

  // DYNAMICALLY ADJUST NAVBAR
  $(function() {
      $(window).scroll(function() {

          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height() - 50;

          setNavClass(scroll, windowHeight);
      });
  });

});

function setNavClass (scroll, windowHeight) {
  var navbar = $('.navbar-default');

  if (scroll >= windowHeight) {
      navbar.removeClass("navbar-invisible").addClass('navbar-visible');
  } else {
      navbar.removeClass('navbar-visible').addClass("navbar-invisible");
  }
}

$(document).on('click', 'a', function(event){
		var link = $.attr(this, 'href')
		if (link.indexOf('/') > -1) {
			link = link.substr(1)
		}

    $('html, body').animate({
        scrollTop: $( link ).offset().top - 50
    }, 1000);
});

// CONTACT FORM EMAIL
// $('#contact-us').on("submit", function (e){
//   e.preventDefault();
//   var name = $('#name').val()
//   var email = $('#email').val()
//   var telephone = $('#telephone').val()
//   var message = $('#message').val()
//
//   console.log(name)
//   console.log(email)
//   console.log(telephone)
//   console.log(message)
//   Email.send(
//     email,
//     "dompaints@gmail.com",
//     name,
//     message,
//     telephone,
//     "username",
//     "password");
// })
