/*! YellowDog   | http://www.yellowdogagency.com | (c) 2017 YellowDog Marketing Inc. */

// defer loading images
function init() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = init;

// add .js class to html if javascript enabled
if ( 'querySelector' in document && 'addEventListener' in window ) {document.documentElement.className += ' js';}

// add .no-touch class to html if not a touch device
if (!("ontouchstart" in document.documentElement)) {document.documentElement.className += " no-touch";}
;
