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
