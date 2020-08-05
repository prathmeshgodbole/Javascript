document.write("BOM_Objects :");

//1> WINDOW Objects

// function windowObject() {
//     document.write("<br> WINDOW OBJECTS : ");
//     var newWin = window.open("https://www.google.com", "newWin", "height=200", "width=200 ");
//     newWin.moveTo(200, 200);
//     newWin.resizeTo(800, 800);
//newWin.close();
//window.close();
//}
//windowObject();


//2> SCREEN Objects
// function screenObject() {
//     document.write("<br> SCREEN OBJECTS :");
//     document.write("<br> Width of current Screen : " + screen.width);
//     document.write("<br> Height of current Screen : " + screen.height);
//     document.write("<br> Width of current Screen Excluding scrollbars etc : " + screen.availWidth);
//     document.write("<br> Height of current Screen Excluding taskbars etc : " + screen.availHeight);
//     document.write("<br> No. of bits used to display one color : " + screen.colorDepth);
//     document.write("<br> Pixel depth of Screen : " + screen.pixelDepth);
// }
//screenObject();


//3> NAVIGATOR Objects
function navigatorObject() {
    document.write("<br> NAVIGATOR OBJECTS :");
    document.write("<br> Application name on the Browser : " + navigator.appName);
    document.write("<br> Application Codename on the Browser : " + navigator.appCodeName);
    document.write("<br> Plateform O.S Name : " + navigator.platform);
    document.write("<br> True if coockies are enabled : " + navigator.cookieEnabled);
    document.write("<br> Product name of the browser engine  : " + navigator.product);
    document.write("<br> Navigator User Agent : " + navigator.userAgent);

}
navigatorObject();

//4> LOCATION Objects
// function locationObject() {
//     document.write("<br> LOCATION OBJECTS :");
//     document.write("<br> URL of current page : " + window.location.href);
//     document.write("<br> Domain name of the web host : " + window.location.hostname);
//     document.write("< br>Path & Filename of current page : " + window.location.pathname);
//     document.write("<br> Web Protocol used(https: or http:) : " + window.location.protocol);
//     //document.write("<br> Loads new document :" + window.location.assign('https://www.google.com'));

// }
//locationObject();

// //5> HISTORY Objects
// function historyObject() {
//     //history.back();
//     history.forward();
// }
// historyObject();