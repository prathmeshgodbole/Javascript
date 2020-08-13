$(document).ready(function() {

    var all_quote = $("blockquote");
    var current_quote = 0;

    function change_quote() {
        $(all_quote[current_quote]).fadeOut(200);

        if (current_quote == all_quote.length - 1) {
            current_quote = 0;
        } else {
            current_quote++;
        }
        $(all_quote[current_quote]).fadeIn(200);
    }
    change_quote()



});