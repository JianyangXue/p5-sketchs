function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(0);


stroke(255);
strokeWeight(3);
noFill();


for(var i=0; i<100; i++){
    rect(0,0+i*10,200,10);
}

for(var i=0; i<40; i++){
    var ellipseSize = 400+(i*10);
    ellipse(400,-50,ellipseSize,ellipseSize);
}

for(var i=0; i<40; i++){
    var ellipseSize = 200+(i*10);
    ellipse(310,700,ellipseSize,ellipseSize);
}

noStroke();
fill(0);
rect(0,700,1000,1000)

stroke(225);
noFill();

for(var i=0; i<100; i++){
    rect(0,0+i*10,200,10);
}

}
function mousePressed(){
    saveCanvas("sketch-07", "png");
}