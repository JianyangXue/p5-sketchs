function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(0);


for(i=0; i<1000; i++){
    stroke(255);
    noFill();
    // ellipse(900/i*2, 700+i-100, 100, 30);
    ellipse(150/i*100, 50+i*5, 200, 60);
}

for(i=0; i<100; i++){
    stroke(255);
    ellipse(500/i*10, 50+i*10, 200, 60);
}

for(i=0; i<50; i++){
    stroke(255);
    ellipse(660/i*8, 90+i*30, 100, 30);
}
for(i=0; i<50; i++){
    stroke(255);
    ellipse(700/i*9, 90+i*30, 100, 30);
}
for(i=0; i<50; i++){
    stroke(255);
    ellipse(680/i*9, 90+i*30, 90, 25);
}
for(i=0; i<50; i++){
    stroke(255);
    ellipse(685/i*9, 90+i*30, 80, 20);
}
for(i=0; i<50; i++){
    stroke(255);
    ellipse(675/i*9, 90+i*30, 70, 15);
}



}
function mousePressed(){
    saveCanvas("sketch-05", "png");
}