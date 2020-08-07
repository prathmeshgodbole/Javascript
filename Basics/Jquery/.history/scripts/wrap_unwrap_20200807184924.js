//.wrap()
$("section").wrap("<div>");

//.unwrap()
$("section").unwrap();

//.wrapAll()
$("section").wrapAll("<div>");


//example
var wrapper = "<div class='wrapper'>";
var button = $("button");
var wrapped = true;

function wrapping() {

    if (wrapped) {
        button.onClick()
        wrapper = "wrap";
        wrapped = false;
    } else {
        wrapped = true;

    }
}