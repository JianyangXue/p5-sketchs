function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(255);


    stroke(0);
    noFill();
    for(var i=0; i<100; i++){
        // ellipse(i*5, 10*i, 250, 250);

    }



    fill(0);
    noStroke(255);
    rect(100, 100, 500, 100);
    rect(200, 100, 100, 700);
    rect(120, 400, 400, 100);

    fill(255);
    rect(220, 100, 100, 650);
}

// function draw(){
//     stroke(0);
//     noFill();
//     rRadius = random(50)+50;
//     ellipse(mouseX, mouseY, rRadius, rRadius);
// }




function mousePressed(){
    saveCanvas("sketch-01", "png");
}