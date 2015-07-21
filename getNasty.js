
function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

colors = "#003366,#336699,#3366CC,#003399,#000099,#0000CC,#000066,#006666,#006699,#0099CC,#0066CC,#0033CC,#0000FF,#3333FF,#333399,#669999,#009999,#33CCCC,#00CCFF,#0099FF,#0066FF,#3366FF,#3333CC,#666699,#339966,#00CC99,#00FFCC,#00FFFF,#33CCFF,#3399FF,#6699FF,#6666FF,#6600FF,#6600CC,#339933,#00CC66,#00FF99,#66FFCC,#66FFFF,#66CCFF,#99CCFF,#9999FF,#9966FF,#9933FF,#9900FF,#006600,#00CC00,#00FF00,#66FF99,#99FFCC,#CCFFFF,#CCCCFF,#CC99FF,#CC66FF,#CC33FF,#CC00FF,#9900CC,#003300,#009933,#33CC33,#66FF66,#99FF99,#CCFFCC,#FFFFFF,#FFCCFF,#FF99FF,#FF66FF,#FF00FF,#CC00CC,#660066,#336600,#009900,#66FF33,#99FF66,#CCFF99,#FFFFCC,#FFCCCC,#FF99CC,#FF66CC,#FF33CC,#CC0099,#993399,#333300,#669900,#99FF33,#CCFF66,#FFFF99,#FFCC99,#FF9999,#FF6699,#FF3399,#CC3399,#990099,#666633,#99CC00,#CCFF33,#FFFF66,#FFCC66,#FF9966,#FF6666,#FF0066,#CC6699,#993366,#999966,#CCCC00,#FFFF00,#FFCC00,#FF9933,#FF6600,#FF5050,#CC0066,#660033,#996633,#CC9900,#FF9900,#CC6600,#FF3300,#FF0000,#CC0000,#990033,#663300,#996600,#CC3300,#993300,#990000,#800000,#993333";
colors_array = colors.split(",");

function getRandomColor() {
	return colors_array[Math.floor(Math.random() * colors_array.length)];
}

function getNasty(element) {
	$.each($(element), function() {
		var randoColor = getRandomColor();
		$(this).css("background-color", randoColor);
		$(this).css("color", invertColor(randoColor));
	})
}

var each = function(args, funky_town) {
	for (var i = 0; i < args.length; i++)
		funky_town(args[i]);
}
var startAndGetInterval = function() {
	var interval = window.setInterval(function() {
		getNasty("p");
		getNasty("div");
		getNasty("img");
		getNasty("body");
		getNasty("button");
	}, 500);

	return interval;
}
$(document).ready(function() {
	var colorIntervalLikeABoss = startAndGetInterval();

	window.removeColors = function() {
		clearInterval(colorIntervalLikeABoss);
	}
	window.startColors = function() {
		colorIntervalLikeABoss = startAndGetInterval();
	}
})