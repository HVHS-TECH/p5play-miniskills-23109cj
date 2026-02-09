/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	world.gravity.y = 2.7 * 9.81;
	cnv = new Canvas(windowWidth,windowHeight);
	tom = new Sprite(150,150,50,50,'d');
	tom.color = '#ffba5f';
	tom.rotationSpeed = 6.7;
	tom.bounciness = 1.9;

	acob = new Sprite(250,250, 25, 'd');
	acob.color = '#00ff00';
	acob.vel.x = 6.32;
	acob.vel.y = 3;
	acob.bounciness = 1.01

	acob1 = new Sprite(300,250, 25, 'd');
	acob1.color = '#00aeff';
	acob1.vel.y = -3;
	acob1.friction = 2;

	platform_1 = new Sprite(250, 600,100000, 25, 'k');
	platform_1.rotation = 45;

	platform_2 = new Sprite(450, 600,100000, 25, 'k');
	platform_2.rotation = -45;

	wallLH  = new Sprite(8, height/2, 8, height, 'k');
	wallLH.color = '#000000';
	wallRH  = new Sprite(windowWidth - 8, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = '#000000';
	wallTop = new Sprite(windowWidth/2, 8, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, windowHeight - 8, windowWidth, 8, 'k');

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#800000');
}

/*******************************************************/
//  END OF APP
/*******************************************************/