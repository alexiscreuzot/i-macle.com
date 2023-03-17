ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false });

ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0 });

ScrollReveal().reveal(".scale-up", {
  duration: 2000,
  scale: 0.9 });

// Main
(function() {
    // UI

    var quotes = $(".slide");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000, showNextQuote);
    }
    showNextQuote();

    $(".abstract").click(function() {
        $(this).toggleClass("show");
    });

    function getQueryParams() {
      var qs = window.location.search.substring(1).split('+').join(' ');
      var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;
      while (tokens = re.exec(qs)) {
          params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }
      return params;
    }
    var params = getQueryParams()
    console.log(params);
      
    for (var key in params) {
      var shouldShow = params[key] == "1";
      document.getElementById(key).style.display = shouldShow ? "block" : "none";
    }

})();
