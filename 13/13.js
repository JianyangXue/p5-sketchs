function setup(){
    var c = createCanvas(1000,1000);
    background(0);

noStroke();
fill(255);
angleMode(DEGREES);

/////////////////////////// first line
push();
    translate(350,250)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(450,250)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(550,250)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(650,250)
    rotate(45);
    rect(0,0,60,60);
pop();
////////////////////////////

//////////////////////////// second line
push();
    translate(350,350)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(450,350)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(550,350)
    rotate(45);
    rect(0,0,60,60);
pop();
////////////////////////////

/////////////////////////// last line
push();
    translate(350,450)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(350,550)
    rotate(45);
    rect(0,0,60,60);
pop();

push();
    translate(350,650)
    rotate(45);
    rect(0,0,60,60);
pop();
////////////////////////////



}

function mousePressed(){
    saveCanvas("sketch-13", "png");
}