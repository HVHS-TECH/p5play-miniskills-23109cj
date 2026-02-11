/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	


function preload() {
  imgFace = loadImage('../assets/images/face.png');
  imgSpace = loadImage('../assets/images/space.jpg');

}




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
	tom.bounciness = 7;

	acob = new Sprite(250,250, 25, 'd');
	acob.image = (imgFace);
	imgFace.resize(50,50);
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

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;
	walls();
	alienGroup = new Group();
	aliens();
	acob.collides(alienGroup, func2Call)

}

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//walls()
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

function walls(){
	wallLH  = new Sprite(8, height/2, 8, height, 'k');
	wallLH.color = '#000000';
	wallRH  = new Sprite(windowWidth - 8, windowHeight/2, 8, windowHeight, 'k');
	wallRH.color = '#000000';
	wallTop = new Sprite(windowWidth/2, 8, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, windowHeight - 8, windowWidth, 8, 'k');
}
	
//8888888888888888888888888888888888888888888888888888888888888888
//func2Call()
//********************************************************************* */
function func2Call(_acob, _ssss) {
		console.log("func2")

	_ssss.remove();
}


//888888888888888888888888888888
// aliens()
//888888888888888888888888888888
function aliens(){
	
	for(i=0; i<10; i++){
		alien = new Sprite(random(50, windowWidth - 50),random(50,windowHeight - 50),random(30,75),'d');
		alien.vel.x = random(-5,5);
		alien.vel.y = random(-3,3);
		alien.color = '#000000';
		alien.bounciness = 0.5;
		alien.drag = 0.35;
		alienGroup.add(alien);
	}
}




/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgSpace);

}

/*******************************************************/
//  END OF APP
/*******************************************************/