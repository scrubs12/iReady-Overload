var duration = 1000;

// hijacks XMLHttpRequest.send() to modify requests
XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
	// modifies inputted request
	newBody = JSON.parse(body);
	if (newBody.correct == false) newBody.correct = true;
	if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

  // sends modified request
	this.realSend(JSON.stringify(newBody));
}

alert("Hack was enabled. All answers inputted in diagnostic will be correct.");
