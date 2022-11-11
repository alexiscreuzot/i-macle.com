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
        $(this).children(".more-icon").toggleClass("open");
        var moreDiv  = $(this).next();
        moreDiv.toggleClass("show");
    });

})();

ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false });


ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0 });


ScrollReveal().reveal(".scale-up", {
  duration: 2000,
  scale: 0.85 });


ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 1000,
  rotate: {
    x: 20,
    z: 20 } });

ScrollReveal().reveal(".slide-up", {
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5 });
//# sourceURL=pen.js