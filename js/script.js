$(document).ready (function() {

	$('.info').hide ();

	//Object creator

	function icon(name, link, color) {
		this.name = name;
		this.link = link;
		this.color = color;
	}

	//Object list

	var facebook = new icon('#facebook', '#facebookLink', '#29ABE2');
	var steam = new icon('#steam', '#steamLink', '#4D4D4D');
	var email = new icon('#email', '#emailLink', '#F15A24');

	//Paragraph fade in

	function fadeIn(link, item) {
		$(link).hover (function () {
			$(item).fadeIn (1000);
		}, function () {
			$(item).hide ();
		});
	}

	//Background changer

	function animate(link, color) {
		$(link).hover (function () {
			$('body').animate({backgroundColor: color}, 200);
		});
	}

	//Combination of both

	function hover(link, color, item) {
		fadeIn(link, item);
		animate(link, color);
	}


	//Random background

	var $bgcolor = Math.floor(Math.random() * 3);

	if ($bgcolor == 0) {
		$('body').css ("background-color", facebook.color);
	}
	else if ($bgcolor == 1) {
		$('body').css ("background-color", steam.color);
	}
	else {
		$('body').css ("background-color", email.color);
	}

	//Functions

	hover(facebook.link, facebook.color, facebook.name);
	hover(steam.link, steam.color, steam.name);
	hover(email.link, email.color, email.name);

});