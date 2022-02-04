(function() {

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

    $(".course .abstract").click(function() {
        $(this).toggleClass("show");
        $(this).children(".more-icon").toggleClass("open");

        var moreDiv  = $(this).next();
        moreDiv.toggleClass("show");
    });

})();



function toggleMore() {
    $("#story .more").toggleClass("show");
    $("#story .dots").hide();
    $("#story a.toggle-more").hide();
    $("#story a.toggle-less").show();
}

function toggleLess() {
    $("#story .more").toggleClass("show");
    $("#story .dots").show();
    $("#story a.toggle-more").show();
    $("#story a.toggle-less").hide();
}

