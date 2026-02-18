/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let score  = 0;
const ALIEN_NUMBER = 69;
function setup() {
	let killerGroup = new Group();

	frameRate(30);
	console.log("setup: ");
	world.gravity.y = 2.7 * 9.81;
	cnv = new Canvas(windowWidth,windowHeight);
	tom = new Sprite(150,150,50,50,'d');
	tom.color = '#85ffda';
	tom.rotationSpeed = 6.7;
	killerGroup.add(tom);


	acob = new Sprite(250,250, 25, 'd');
	acob.color = '#00ff00';
	acob.vel.x = 6.32;
	acob.vel.y = 3;
	killerGroup.add(acob);


	acob1 = new Sprite(250,250, 25, 'd');
	acob1.color = '#00aeff';
	acob1.vel.x = 6.32;
	acob1.vel.y = 0 
	acob1.bounciness = 1.1;
	killerGroup.add(acob1);
	walls();

	alienGroup = new Group();
	aliens();
	killerGroup.collides(alienGroup, func2Call);
	
}
	
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
function func2Call(_killerGroup, _ssss) {
	console.log("func2")
	_ssss.remove();
	score = score + 1;
}


//888888888888888888888888888888
// aliens()
//888888888888888888888888888888
function aliens(){
	
	for(i=0; i<ALIEN_NUMBER; i++){
		alien = new Sprite(random(50, windowWidth - 50),random(50,windowHeight - 50),random(30,75),'d');
		alien.vel.x = random(-5,5);
		alien.vel.y = random(-3,3);
		alien.color = '#000000';
		alien.text = "ALIEN";
		alien.bounciness = 1.25;
		alien.drag = 0.35;
		alienGroup.add(alien);
	}
}


	

/*******************************************************/
// draw()
/*******************************************************/
	let name = prompt("Please enter your name");
	let time = 0;
	let totalTime = 0;
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
	text("Aliens remaining:" + (69 - score), windowWidth - 200, 100);
	if(score == ALIEN_NUMBER){
		totalTime = Math.round(time / 30);
		alert("Hi " + name +  "\nIt took you " + totalTime + " seconds to clear the aliens \n GOOD JOB :)")
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/