/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	frameRate(30);
	console.log("setup: ");
	world.gravity.y = 2.7 * 9.81;
	cnv = new Canvas(windowWidth,windowHeight);
	tom = new Sprite(150,150,50,50,'d');
	tom.color = '#ffba5f';
	tom.rotationSpeed = 6.7;

	acob = new Sprite(250,250, 25, 'd');
	acob.color = '#00ff00';
	acob.vel.x = 6.32;
	acob.vel.y = 3;
	acob1 = new Sprite(250,250, 25, 'd');
	acob1.color = '#00aeff';
	acob1.vel.x = 6.32;
	acob1.vel.y = 0 ;
	walls();
	
}
	
function walls(){
	wallLH  = new Sprite(8, height/2, 8, height, 'k');
	wallLH.color = '#000000';
	wallRH  = new Sprite(windowWidth - 8, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = '#000000';
	wallTop = new Sprite(windowWidth/2, 8, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, windowHeight - 8, windowWidth, 8, 'k');
}

	

/*******************************************************/
// draw()
/*******************************************************/
	let name = prompt("Please enter your name");
	let time = 0;
function draw() {
	time = time + 1;
	tom.moveTowards(mouseX, mouseY, 0.0067);
	if(mouse.presses()){
		console.log("click")
		acob.moveTo(mouseX, mouseY, 100);
		
	}
	//acob1.vel.y = 0;
	if(kb.pressing("left")){
		acob1.vel.x = -3;
	}
	if(kb.pressing("right")){
		acob1.vel.x = 3;
	}
	if(kb.pressing("space")){
		acob1.vel.y = -30000;
	}
	background('#800000');
	text("Hello World", 50, 50);
	text("Hello " + name, 50,100);
	text(Math.round(time / 30), windowWidth/2 , windowHeight/2);
}

/*******************************************************/
//  END OF APP
/*******************************************************/