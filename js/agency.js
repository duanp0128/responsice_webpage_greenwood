/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();

    if (isScrolledIntoView("section#services")) {
      window.history.pushState("state", "", "#services");
      return;
    }
    if (isScrolledIntoView("section#portfolio")) {
      window.history.pushState("state", "", "#portfolio");
      return;
    }
    if (isScrolledIntoView("section#partner")) {
      window.history.pushState("state", "", "#partner");
      return;
    }
    if (isScrolledIntoView("section#about")) {
      window.history.pushState("state", "", "#about");
      return;
    }
    if (isScrolledIntoView("section#team")) {
      window.history.pushState("state", "", "#team");
      return;
    }
    if (isScrolledIntoView("section#contact")) {
      window.history.pushState("state", "", "#contact");
      return;
    }
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

function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
