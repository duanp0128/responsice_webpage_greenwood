/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  // window.addEventListener( 'scroll', function( event ) {
  //   var didScroll = false;
  //
  //   if( !didScroll ) {
  //     didScroll = true;
  //     urlUpdate();
  //     // setTimeout( scrollPage, 250 );
  //   }
  // }, false );

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top-50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // $(window).scroll(function() {
  //   	if (isScrolledIntoView("section#services")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/services"); return; }
  //   	if (isScrolledIntoView("section#portfolio")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/portfolio"); return; }
  //   	if (isScrolledIntoView("section#partner")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/partner"); return; }
  //   	if (isScrolledIntoView("section#about")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/about"); return; }
  //     if (isScrolledIntoView("section#team")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/team"); return; }
  //     if (isScrolledIntoView("section#contact")) { window.history.pushState("state", "title", "/hkgreenwoodsd/index.html/contact"); return; }
  // });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// $('.btn-right-contact').click(function() {
//   $('html, body').stop().animate({
//     scrollTop: $($anchor.attr('href')).offset().top
//   }, 1500, 'easeInOutExpo');
// });

function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function urlUpdate() {
  // e.preventDefault();
  var targetUrl = "";
  var relative_path = "";
  // var base_path = "http://192.169.0.64/hkgreenwoodsd/index.html";
  var base_path = $(this).attr('href');

  if (isScrolledIntoView("section#services")) {
    relative_path = "/services";
  } else if (isScrolledIntoView("section#portfolio")) {
    relative_path = "/portfolio";
  } else if (isScrolledIntoView("section#partner")) {
    relative_path = "/partner";
  } else if (isScrolledIntoView("section#about")) {
    relative_path = "/about";
  } else if (isScrolledIntoView("section#team")) {
    relative_path = "/team";
  } else if (isScrolledIntoView("section#contact")) {
    relative_path = "/contact";
  }
  var targetUrl = base_path + "" + relative_path;
  // var targetTitle = $(this).attr('title');

  window.history.pushState({
    url: "" + targetUrl + ""
  }, "", targetUrl);

  // setCurrentPage(targetUrl);
}
