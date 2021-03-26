

function setup(){
    var c = createCanvas(1000,1000);
    background(255);
}

function draw(){
    noFill();
    stroke(0);
    strokeWeight(70);
    strokeCap(SQUARE);

    line(200,200,200, 900);
    arc(240,260,290,290,270,360);
    arc(320,700,290,290,180,0);
}


function mousePressed(){
    saveCanvas("sketch-16", "png");
}