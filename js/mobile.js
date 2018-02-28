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

function apply_content() {

	$( "#arrow-right" ).click(function() {
		$.fn.fullpage.moveSlideRight();
	});

	$( "#arrow-left" ).click(function() {
		$.fn.fullpage.moveSlideLeft();
	}); 

	$( "#studs-image" ).click(function() {
		event.stopPropagation();
		$('#studs-image-div').css('display', 'block');
		hideNavBarBottom();
	}); 

	$( "#studs-close-button" ).click(function() {
		$('#studs-image-div').css('display', 'none');
		showNavBarBottom();
	}); 

	$( "#slide4" ).click(function() {
		$('#studs-image-div').css('display', 'none');
		showNavBarBottom();
	}); 

	var w = Math.max(window.innerWidth, document.documentElement.clientWidth);
	var h = Math.max(window.innerHeight, document.documentElement.clientHeight);


	if(w > 550 && h > 450) {

		var imageUrl = "../images/space-large.jpg"
		$('#section-title').css('background-image', 'url(' + imageUrl + ')');

		var leftDistance = $("#spectra-text").offset().left;
		var topDistance = $("#spectra-text").offset().top - (2 * h);

		var pixelsW = leftDistance + "px";
		var pixelsH = (topDistance - 70) + "px";

		$("#projects-title-container").css('left', pixelsW);
		$("#projects-title-container").css('top', pixelsH);
	}
	else {
		var imageUrl = "../images/space-small.jpg"
		$('#section-title').css('background-image', 'url(' + imageUrl + ')');
	}
}

function resize_content() {
	var w = Math.max(window.innerWidth, document.documentElement.clientWidth);
	var h = Math.max(window.innerHeight, document.documentElement.clientHeight);

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
			"and the source code is available on <a class=\"underlined\" href=\"https://github.com/mheine/Spectra\">GitHub</a>.",
			"the source code is available on <a class=\"underlined\" href=\"https://github.com/mheine/Spectra\">GitHub</a> and a demo can be \
			found <a class=\"underlined\" href=\"https://youtu.be/saqd8fJADOU\">here</a>.");
		$("#spectra-text").html(newSpectra);

		// == RCAST == // 
		$("#rcast-div").hide();

		var rcastString = $("#rcast-text").html();
		if (!rcastString.includes("0wEcYPSm_f8")) {
			newRcast = rcastString.concat(
				"A demo of the browser extension in action can \
				be found <a class=\"underlined\" href=\"https://youtu.be/0wEcYPSm_f8\">here</a>.");
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

		$("#tutor-image").css('height', '275');
		$("#studs-image").css('height', '275');

		$("#projects-title-container").css('left', '30px');
		$("#projects-title-container").css('top', '45px');
	}
	else {

		// == SPECTRA == //
		$("#spectra-div").show();
		var spectraString = $("#spectra-text").html();
		var newSpectra = spectraString.replace(
			"the source code is available on <a class=\"underlined\" href=\"https://github.com/mheine/Spectra\">GitHub</a> and a demo can be \
			found <a class=\"underlined\" href=\"https://youtu.be/saqd8fJADOU\">here</a>.",
			"and the source code is available on <a class=\"underlined\" href=\"https://github.com/mheine/Spectra\">GitHub</a>.");
		$("#spectra-text").html(newSpectra);

		// == RCAST == // 
		$("#rcast-div").show();

		var rcastString = $("#rcast-text").html();
		var newRcast = rcastString.replace(
			"A demo of the browser extension in action can \
			be found <a class=\"underlined\" href=\"https://youtu.be/0wEcYPSm_f8\">here</a>.",
			"");
		$("#rcast-text").html(newRcast);

		// == TUTORING == // 
		$("#tutor-image").show();

		// == STUDS == // 
		$("#studs-image").show();

	}

	// Give each link (specified by the underlined class) a border color.
	// Spectra and Tutoring are darker; so the alpha is slightly more prominent.
	$( ".underlined" ).each(function() {
		var colArray = $(this).css('color').match(/\d+/g);
		if ($(this).parent().attr('id') == "spectra-text" || $(this).parent().is("li")) {
			$(this).css('border-color', "rgba(" + colArray[0] + ", " + colArray[1] + ", " + colArray[2] + ", 0.3)");
		} else {
			$(this).css('border-color', "rgba(" + colArray[0] + ", " + colArray[1] + ", " + colArray[2] + ", 0.15)");
		}
	});

	if(w > 750 && h > 450) {
		$('.custom-control-arrows').css('display', 'block');
		var leftDist = Math.floor(w / 2) - 100;

		$('#arrow-left').css('left', leftDist + 'px');
		$('#arrow-right').css('left', (leftDist + 160) + 'px');
	}
	else {
		$('.custom-control-arrows').css('display', 'none');
	}

}

function showNavBarBottom() {
	$('.custom-control-arrows').css('display', 'block');
	$('.fp-slidesNav').css('display', 'block');
}

function hideNavBarBottom() {
	$('.custom-control-arrows').css('display', 'none');
	$('.fp-slidesNav').css('display', 'none');
}

addEvent(window, "resize", resize_content);
addEvent(window, "load", resize_content);