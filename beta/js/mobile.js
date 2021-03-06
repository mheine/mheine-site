var addEvent = function(object, type, callback) {
	if (object == null || typeof(object) == 'undefined') return;
	if (object.addEventListener) {
		object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
		object.attachEvent("on" + type, callback);
	} else {
		object["on"+type] = callback;
	}
};

function resize_content() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	$("#tutor-image").css('height', $('#tutor-text').height() + 18);
	$("#studs-image").css('height', $('#studs-text').height() + 18);

	if (w < 550 || h < 600) {

		// == ABOUT == //
		/* TODO - How much of an ugly-hack is this? better way to wrap content?*/ 
		$("#last-item-about-list").html("I currently live in <br> Stockholm, Sweden.");

		// == SPECTRA == //
		$("#spectra-div").hide();

		var spectraString = $("#spectra-text").html();
		var newSpectra = spectraString.replace(
			"and the source code is available on <a href=\"https://github.com/mheine/Spectra\">GitHub</a>.",
			"the source code is available on <a href=\"https://github.com/mheine/Spectra\">GitHub</a> and a demo can be \
			found <a href=\"https://youtu.be/saqd8fJADOU\">here</a>.");
		$("#spectra-text").html(newSpectra);

		// == RCAST == // 
		$("#rcast-div").hide();

		var rcastString = $("#rcast-text").html();
		if (!rcastString.includes("0wEcYPSm_f8")) {
			newRcast = rcastString.concat(
				"A demo of the browser extension in action can \
				be found <a href=\"https://youtu.be/0wEcYPSm_f8\">here</a>.");
		}
		$("#rcast-text").html(newRcast);

		// == TUTORING == // 
		$("#tutor-image").hide();

		// == STUDS == // 
		$("#studs-image").hide();

	}
	//Rough outline for tablet resolution 
	else if (w < 1150 && w > 550) {
		$("#tutor-image").css('width', $('#tutor-text').width() + 28);
		$("#studs-image").css('width', $('#studs-text').width() + 28);
		console.log("tablet resize")
	}
	else {

		// == SPECTRA == //
		$("#spectra-div").show();
		var spectraString = $("#spectra-text").html();
		var newSpectra = spectraString.replace(
			"the source code is available on <a href=\"https://github.com/mheine/Spectra\">GitHub</a> and a demo can be \
			found <a href=\"https://youtu.be/saqd8fJADOU\">here</a>.",
			"and the source code is available on <a href=\"https://github.com/mheine/Spectra\">GitHub</a>.");
		$("#spectra-text").html(newSpectra);

		// == RCAST == // 
		$("#rcast-div").show();

		var rcastString = $("#rcast-text").html();
		var newRcast = rcastString.replace(
			"A demo of the browser extension in action can \
			be found <a href=\"https://youtu.be/0wEcYPSm_f8\">here</a>.",
			"");
		$("#rcast-text").html(newRcast);

		// == TUTORING == // 
		$("#tutor-image").show();

		// == STUDS == // 
		$("#studs-image").show();

	}
}


addEvent(window, "resize", resize_content);
addEvent(window, "load", resize_content);