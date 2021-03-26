function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(255);


for(i=0; i<500; i++){
    stroke(0);
    rect(100, 100+i*10, 70, 30);
}
for(i=0; i<20; i++){
    stroke(0);
    rect(100, 600/i*2, 400, 30);
}
for(i=0; i<30; i++){
    stroke(0);
    rect(100+i*10, 200/i*3, 400, 50);
}




}
function mousePressed(){
    saveCanvas("sketch-04", "png");
}