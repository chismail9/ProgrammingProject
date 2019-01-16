var canv1;
var canv2;
var canv3;
var canv4;
var canv5;
var canv6;
var angle = 0.0;
var imgs = [];
var sounds=[];
var sons=[];
var i=0;
var angle=0;
function preload() {
  for (var i=0; i<=5; i++) {
    imgs[i] = loadImage(i+".jpg"); 
  }
  for (var j=0; j<=2; j++) {
    sounds[j] = loadSound(j+".mp3"); 
  }
  for (var k=1; k<=3; k++) {
    sons[k] = loadSound("Track"+k+".mp3"); 
  } 
}
function setup() {
    createCanvas(1000, 600);
	img=loadImage("back.png");
	img6=loadImage("canv6back.png")
	sons[1].play();
	time = 0;
    canv1 = createGraphics(1000, 600);
    canv2 = createGraphics(170, 70);
	canv3 = createGraphics(170, 70);
	canv4 = createGraphics(80, 90);
	canv5 = createGraphics(80, 90);
	canv6 = createGraphics(125, 60);
	//canv7 = createGraphics(1000, 600);
	frameRate(10);
}
function draw() { 
    drawcanv1();
    drawcanv2();
	drawcanv3();
	drawcanv4();
	drawcanv5();
	drawcanv6();
	//drawcanv7();
    image(canv1, 0, 0,1000,600);
	//image(canv7, 0, 0);
	image(canv6, 595, 375);
	rotate(radians(-1,5));
    image(canv2, 560, 515);
	rotate(radians(1,5));
	image(canv3, 255,510);
	rotate(radians(-8));
    image(canv4, 102, 408);
	rotate(radians(15));
	image(canv5, 810, 280);
}
function drawcanv1() {
	if (i>5){i=0;}  
    canv1.image(imgs[i],0,0, width, height); 
	i=i+1;
	
	canv1.image(img, 50, 320,900,420);
    canv1.fill(255, 255, 255);
    canv1.textSize(32);
	if (mouseIsPressed){
		canv1.fill(255);
		canv1.stroke(200,200,200);
		canv1.strokeWeight(5);
	}
}
function drawcanv3() {
	//canv3.background(18,16,19);
	canv3.background(0,0);
    canv3.fill(255, 255, 255);
	canv3.fill(255,0,110);
	if (key === 'q') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 0,40,22);
		canv3.fill(255,0,220);
	if (key === 'a') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 24,40,22);
		canv3.fill(178,0,255);
	if (key === 'z') {
		canv3.fill(255,255,255);}
		canv3.rect(23, 48,40,22);
		canv3.fill(76,255,0);
	if (key === 'w') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 0,40,22);
		canv3.fill(0,255,255);
	if (key === 's') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 24,40,22);
		canv3.fill(0,148,255);
	if (key === 'x') {
		canv3.fill(255,255,255);}
		canv3.rect(65, 48,40,22);
		canv3.fill(255,216,0);
	if (key === 'e') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 0,40,22);
		canv3.fill(255,106,0);
	if (key === 'd') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 24,40,22);
		canv3.fill(255,0,0);
	if (key === 'c') {
		canv3.fill(255,255,255);}
		canv3.rect(107, 48,40,22);	
}
function keyPressed(){
	if ((key === 'a')||(key === 'z')||(key === 's')||(key === 'x')||(key === 'e')||(key === 'd')||(key === 'c')) {
		for (var i=0;i<=2;i++){
			if (sounds[i].isPlaying()){sounds[i].stop();}}}
	if (key === 'q'){
		sounds[0].play();}
	if (key === 'a'){
		sounds[1].play();}
	if (key === 'z') {
		sounds[2].play();}
	if (key === 'w') {
		sounds[2].play();}
	if (key === 's') {
		sounds[2].play();}
	if (key === 'x') {
		sounds[2].play();}
	if (key === 'e') {
		sounds[2].play();}
	if (key === 'd') {
		sounds[2].play();}
	if (key === 'c') {
		sounds[2].play();}	
}
	
function drawcanv2() {	
	if (angle>=1.3){angle=0.7;}
	canv2.rectMode(CENTER);
	//canv2.background(18,16,19);
	canv3.background(0,0);
	canv2.fill(0);
	canv2.stroke(200,200,200);
	canv2.strokeWeight(2);
 	canv2.translate(85,35);
	canv2.rotate(angle);
	canv2.translate(-85,-35);
	canv2.ellipse(85,35,69,70);
    canv2.stroke(255);
    canv2.strokeWeight(1);
	canv2.fill (255,255,255,0);
	canv2.ellipse(85,35,45,46);
	canv2.ellipse(85,35,25,26);
	canv2.stroke(255,0,0);
	canv2.fill (255,0,0);
	canv2.strokeWeight(1);
    canv2.rect(85,35,4,4);
    var speed = map(mouseX-560, 50, 120, 0, 4);
	speed = constrain(speed, 0.01, 8);
	angle += 0.1;
	if (((mouseY-515>=20)&&(mouseY-515<=50))&&((mouseX-560>=50)&&(mouseX-560<=120))){ 		
		for (var i=1;i<=3;i++){
		sons[i].rate(speed);}
	}
}

function drawcanv4() {	
	//canv4.background(31,31,29);
	canv4.background(0,0);
	background(255);
	var m = 80;
	stroke(m);
	while(m > 0){
		canv4.stroke(5);
		canv4.fill(random(255),random(255),random(255));
		canv4.ellipse(40,45,m,m);
		m  = m - random(50);
	}
}
function drawcanv5() {	
	//canv5.background(31,31,29);
	canv5.background(0,0);
	var m = 80;
	stroke(m);
	while(m > 0){
		canv5.stroke(5);
		canv5.fill(random(255),random(255),random(255));
		canv5.ellipse(40,45,m,m);
		m  = m - random(50);
	}
}
function drawcanv6() {	
	canv6.background(img6);
	canv6.textSize(18);
	canv6.textAlign(LEFT, RIGHT);
	canv6.fill(0,0,255);
	canv6.text("Track1",20,20);	  
	canv6.text("Track2",20,35);	  
	canv6.text("Track3",20,50);	  	
}

function mousePressed(){
	if (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=0)&&(mouseY-375<=50))){
		for (var i=1;i<=3;i++){
				if (sons[i].isPlaying()){
					sons[i].stop();
				}
		}
		if (((mouseX-595>=20)&& (mouseX-595<=125))&&(mouseY-375<=20)){
			sons[1].play();
		}
		if  (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=20)&&(mouseY-375<=35))){
			sons[2].play();
		}
		if (((mouseX-595>=20)&& (mouseX-595<=125))&&((mouseY-375>=35)&&(mouseY-375<=50))){
			sons[3].play();
		}
	}
}
		
