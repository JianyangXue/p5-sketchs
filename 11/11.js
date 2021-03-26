function setup(){
    var c = createCanvas(1000,1000);
    background(0);

stroke(0);
strokeWeight(1);
fill(255);


for(i=0; i<50; i++){
    stroke(0);
    rect(70+i*10, 150/i*30, 200, 40);
}

for(i=0; i<40; i++){
    stroke(0);
    rect(70+i*10, 550/i*30, 200, 40);
}


}

function mousePressed(){
    saveCanvas("sketch-11", "png");
}