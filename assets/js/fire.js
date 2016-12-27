
var keyData = {
	1: {
		sound: new Howl({
  		src: ['assets/Sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	2: {
		sound: new Howl({
  		src: ['assets/Sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	3: {
		sound: new Howl({
  		src: ['assets/Sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	4: {
		sound: new Howl({
  		src: ['assets/Sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['assets/Sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	5: {
		sound: new Howl({
  		src: ['assets/Sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	6: {
		sound: new Howl({
  		src: ['assets/Sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	7: {
		sound: new Howl({
  		src: ['assets/Sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	8: {
		sound: new Howl({
			src: ['assets/Sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	9: {
		sound: new Howl({
  		src: ['assets/Sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	10: {
		sound: new Howl({
  		src: ['assets/Sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	11: {
		sound: new Howl({
  		src: ['assets/Sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['assets/Sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	12: {
		sound: new Howl({
  		src: ['assets/Sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	13: {
		sound: new Howl({
  		src: ['assets/Sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	14: {
		sound: new Howl({
  		src: ['assets/Sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	15: {
		sound: new Howl({
  		src: ['assets/Sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	16: {
		sound: new Howl({
  		src: ['assets/Sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	17: {
		sound: new Howl({
  		src: ['assets/Sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	18: {
		sound: new Howl({
  		src: ['assets/Sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	19: {
		sound: new Howl({
  		src: ['assets/Sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	20: {
		sound: new Howl({
  		src: ['assets/Sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	21: {
		sound: new Howl({
  		src: ['assets/Sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	22: {
		sound: new Howl({
  		src: ['assets/Sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	23: {
		sound: new Howl({
			src: ['assets/Sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	24: {
		sound: new Howl({
  		src: ['assets/Sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
	var circles = [];

	function onDoubleClick(event) {
			console.log(event);
			// var rand = Math.random() * 24;
			// var circle = new Path.Circle(new Point(event.clientX,event.clientY), 500);
			// circle.fillColor = keyData[rand].color;
			// keyData[rand].sound.play();
			

			// circles.push(circle);
	}
	function onFrame(e){
		for(var i = 0;i<circles.length;i++){
			circles[i].fillColor.hue+=1;
			circles[i].scale(.95);	
		}
	}




var width, height, center, width2, height2, center2;
var points = 8;
var path = new Path();
var path2 = new Path();
var mousePos = view.center / 2;
var mousePos2 = view.center / 4;
var pathHeight = mousePos.y;
var pathHeight2 = mousePos2.y;
path.fillColor = 'red';
path2.fillColor= "#ff6100";
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






	


