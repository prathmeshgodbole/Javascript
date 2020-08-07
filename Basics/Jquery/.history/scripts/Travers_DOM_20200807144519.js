//.next()
$("#logo").next().css({ border: "2px solid red" });

//.prev()
$("#lead-banner").prev().css({ border: "2px dotted red" });

//.parent() || parents()
$("h3").parent().css({ border: "2px dotted blue" });

//.children()
$("#contact-methods").children().css({ border: "2px solid pink" });

//.find()
$("#social-nav").find(".twitter").css({ border: "2px solid green" });

//.closest()
$("#contact-methods").closest().css({ border: "2px solid violet" });