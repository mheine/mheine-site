
$( window ).resize(function() {
	var $header = $("#header");

	if (parseInt($header.css("font-size")) < 36) {
		$header.css({ "font-size": "36px" });   
	}

	var $nav = $("#nav");

	if (parseInt($(window).width()) < 330) 
		$nav.css({ "width": "160px" });   

	else 
		$nav.css({ "width": "auto" });   

});
