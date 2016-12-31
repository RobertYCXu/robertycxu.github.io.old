
$("#about").on("click", function(){
	window.location.href = "../about/aboutIndex.html";
})

$("#title").on("click", function(){
	window.location.href = "../about/aboutIndex.html";
})

$("#projects").on("click", function(){
	window.location.href = "../projects/projectsIndex.html";
})

$(".github").on("click", function(){
	window.open("https://github.com/RobertYCXu");
})

$(".linkedin").on("click", function(){
	window.open("https://ca.linkedin.com/in/robert-xu-35476b125");
})





var width, height, center, width2, height2, center2;
var points = 8;
var path = new Path();
var path2 = new Path();
var mousePos = view.center / 2;
var mousePos2 = view.center / 4;
var pathHeight = mousePos.y;
var pathHeight2 = mousePos2.y;
path.fillColor = 'red';
path2.fillColor= "orange";
initializePath();
initializePath2();

function initializePath() {
	center = view.center;
	width = view.size.width;
	height = view.size.height / 2;
	path.segments = [];
	path.add(view.bounds.bottomLeft);
	for (var i = 1; i < points; i++) {
		var point = new Point(width / points * i, center.y);
		path.add(point);
	}
	path.add(view.bounds.bottomRight);
	
}

function initializePath2() {
	center2 = view.center;
	width2 = view.size.width;
	height2 = view.size.height/1.2;
	path2.segments = [];
	path2.add(view.bounds.bottomLeft);
	for (var i = 1; i < points; i++) {
		var point = new Point(width2 / points * i, center2.y);
		path2.add(point);
	}
	path2.add(view.bounds.bottomRight);
	
}

function onFrame(event) {
	pathHeight += (center.y - mousePos.y - pathHeight) / 5;
	pathHeight2 += (center2.y - mousePos2.y - pathHeight2) / 5;
	for (var i = 1; i < points; i++) {
		var sinSeed = event.count + (i + i % 10) * 100;
		var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
		var sinHeight2 = Math.sin(sinSeed / 200) * pathHeight2;
		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
		var yPos2 = Math.sin(sinSeed / 100) * sinHeight2 + height2;
		path.segments[i].point.y = yPos;
		path2.segments[i].point.y = yPos2;
	}
	path.smooth({ type: 'continuous' });
	path2.smooth({ type: 'continuous' });
}

function onMouseMove(event) {
	mousePos = event.point;
	mousePos2 = event.point;
}



// Reposition the path whenever the window is resized:
function onResize(event) {
	initializePath();
	initializePath2();
}






	


