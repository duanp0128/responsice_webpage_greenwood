$(function() {

  var url = window.location.href.replace("/index.html", "");

  $(document).scroll(function () {
    currentHash = "";
    $('section').each(function () {
        var top = window.pageYOffset;
        var distance = top - $(this).offset().top;
        var hash = $(this).attr('id');

        if (distance < 30 && distance > -30 && currentHash != hash) {
            console.log(hash);
            currentHash = hash;

            var title = currentHash;
            var endpoint = "/"+currentHash;
            addHistoryState(title, url,endpoint);
        }
    });
  });

  $('a.page-scroll').bind('click', function(event) {
    var title = $(this).text();
    var endpoint = $(this).attr('href').replace("\#", "/");
    addHistoryState(title, url,endpoint);

    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

});

function addHistoryState(title, url, endpoint) {
  window.history.pushState({title: title}, title, url+endpoint);
}



