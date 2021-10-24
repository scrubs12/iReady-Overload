// starts timer
fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=resume`, {
	"headers": {
		"accept": "application/json, text/plain, */*",
		"accept-language": "en-US,en;q=0.9",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	},
	"referrer": "https://login.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": null,
	"method": "GET",
	"mode": "cors",
	"credentials": "include"
});

// checks if service workers are supported
if (typeof(Worker) == "undefined") {
	// workers are not supported
	alert("This hack will not work on this browser. Use something more modern like Google Chrome.");
} else {
	// creates worker that counts for the number of minutes
	w = new Worker("data:text/js;charset=utf-8," + encodeURI(`setTimeout("postMessage('timeComplete')", ${minutes * 60000});`));
}

// detects when service worker is finished
w.onmessage = function(event) {
	if (event.data == "timeComplete") {

		// sends fetch request to stop timer
		fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=pause`, {
			"headers": {
				"accept": "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin"
			},
			"referrer": "https://login.i-ready.com/student/dashboard/home",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": null,
			"method": "GET",
			"mode": "cors",
			"credentials": "include"
		});

		alert(`${minutes} minutes have been added to the account. Refresh and they should be there.`);
	}
};
