//First and last
$(".wrapper nav li:first").css({ border: "2px solid red" });
$(".wrapper nav li:last").css({ border: "2px solid red" });


//First child and Last Child
$("#contact ul:first").css({ border: "2px solid blue" });
$("#contact ul:last").css({ border: "2px solid blue" });


//even
$("header nav li:even").css({ border: "2px solid orange" });


//odd
$("header nav li:odd").css({ border: "2px solid white" });


//not
$("section:not('#contact')").css({ border: "2px solid yellow" });


//less than
$("#social-nav li:lt(3)").css({ border: "2px dotted pink" });


//greater than
$("#social-nav li:gt(2)").css({ border: "2px solid green" });


//attribute filter
$("img[alt]").css({ border: "2px solid brown" });


//attribute with specific value
$("img[alt]");