function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(0);


for(i=0; i<500; i++){
    stroke(255);
    noFill();
    rect(150/i*50, 50+i*1.5, 100, 60);
    rect(250/i*60, 50+i*2, 100, 60);
    rect(350/i*70, 50+i*1.5, 100, 60);
    rect(450/i*80, 50+i*2, 100, 60);
}

for(i=0; i<500; i++){
    stroke(255);
    noFill();
    // rect(50+i*1.5, 600/i*50, 100, 60);
    // rect(50+i*2, 750/i*60, 100, 60);
    // rect(50+i*1.5, 850/i*70, 100, 60);
    rect(650/i*20, 350+i*2, 150, 60);
}




}
function mousePressed(){
    saveCanvas("sketch-06", "png");
}