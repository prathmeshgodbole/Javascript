$(document).ready(function() {
    //example one -fading animation
    var all_quote = $("blockquote");
    var current_quote = 0;

    function change_quote() {
        $(all_quote[current_quote]).fadeOut(200, function() {

            if (current_quote == all_quote.length - 1) {
                current_quote = 0;
            } else {
                current_quote++;
            }
            $(all_quote[current_quote]).fadeIn(200);

        });


    }
    var timer = setInterval(change_quote, 3000);

    //example two- sliding animation - click to expand
    var list = $("#points-of-sale li");
    list.on("click", function() {
        $(this).find("p").fadeToggle(300);
    });

});