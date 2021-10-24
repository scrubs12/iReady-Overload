// disables hack
XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
XMLHttpRequest.prototype.realSend = undefined;
alert("Hack was disabled.")
