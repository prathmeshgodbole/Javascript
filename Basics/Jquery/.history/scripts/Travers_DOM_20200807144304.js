//.next()
$("#logo").next().css({ border: "2px solid red" });

//.prev()
$("#lead-banner").prev().css({ border: "2px dotted red" });

//.parent() || parents()
$("h3").parent().css({ border: "2px dotted blue" });

//.children()
$("#contact-methods").children().css({ border: "2px solid pink" });

//.find()
$("#contact-methods").find().css({ border: "2px solid pink" });
//.closest()