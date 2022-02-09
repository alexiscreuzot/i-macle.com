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
    console.log("test")
    $("#mission .more").toggleClass("show");
    $("#mission .dots").hide();
    $("#mission a.toggle-more").hide();
    $("#mission a.toggle-less").show();
}

function toggleLess() {
    $("#mission .more").toggleClass("show");
    $("#mission .dots").show();
    $("#mission a.toggle-more").show();
    $("#mission a.toggle-less").hide();
}

