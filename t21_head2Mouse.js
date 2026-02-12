/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	world.gravity.y = 2.7 * 9.81;
	cnv = new Canvas(1000,1000);
	tom = new Sprite(150,150,50,50,'d');
	tom.color = '#ffba5f';
	tom.rotationSpeed = 6.7;

	acob = new Sprite(250,250, 25, 'd');
	acob.color = '#00ff00';
	acob.vel.x = 6.32;
	acob.vel.y = 3;
	acob1 = new Sprite(250,250, 25, 'n');
	acob1.color = '#00aeff';
	acob1.vel.x = 6.32;
	acob1.vel.y = -3;
}
	


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	tom.moveTowards(mouseX, mouseY, 0.0067);
	if(mouse.presses()){
		console.log("click")
		acob.moveTo(mouseX, mouseY, 300);
		acob.vel = 0;
	}
	background('#800000');

}

/*******************************************************/
//  END OF APP
/*******************************************************/