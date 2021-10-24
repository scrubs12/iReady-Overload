// gets lesson data
var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
var minutes = 45; // change the 45 to the amount of time you want. This is only neccessary for the alternate hack.

// sets cookies in case something breaks
document.cookie = `csid=${csid}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;
document.cookie = `minutes=${minutes}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;
