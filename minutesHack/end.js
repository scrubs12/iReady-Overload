csid = getCookie("csid");

// sends fetch request to stop timer and update time
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

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
