function setup(){
    var c = createCanvas(1000,1000);
    background(255);


stroke(0);
strokeWeight(5);
noFill();
const upperlineLength = [750, 650, 550, 800, 500];

for(var i=0; i<upperlineLength.length; i++){
    line(250, i*20, upperlineLength[i], i*20);
}

const lowerlineLength = [350, 250, 200];

for(var i=0; i<lowerlineLength.length; i++){
    line(500, i*300, lowerlineLength[i], i*300);
}

const I = [350, 250, 250, 400];

for(var i=0; i<I.length; i++){
    line(250, i*20, I[i], i*500);
}






}

function mousePressed(){
    saveCanvas("sketch-08", "png");
}