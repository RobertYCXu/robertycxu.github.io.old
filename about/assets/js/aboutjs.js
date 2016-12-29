

var keyData = {
	q: {
		sound: new Howl({
  		src: ['../assets/Sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		src: ['../assets/Sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		src: ['../assets/Sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		src: ['../assets/Sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['../assets/Sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		src: ['../assets/Sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		src: ['../assets/Sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		src: ['../assets/Sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['../assets/Sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		src: ['../assets/Sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['../assets/Sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['../assets/Sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['../assets/Sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['../assets/Sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['../assets/Sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['../assets/Sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['../assets/Sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['../assets/Sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['../assets/Sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['../assets/Sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['../assets/Sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['../assets/Sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['../assets/Sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['../assets/Sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['../assets/Sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['../assets/Sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
	var circles = [];

	function onKeyDown(event) {
		if(keyData[event.key]){
			var circle = new Path.Circle(new Point(view.size.width,view.size.height)*Point.random(), 500);
			circle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();

			circles.push(circle);
		}
	}
	function onFrame(e){
		for(var i = 0;i<circles.length;i++){
			circles[i].fillColor.hue+=1;
			circles[i].scale(.95);	
		}

	}

$("#home").on("click", function(){
	window.location.href = "../index.html";
})
	