function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(255);


    noStroke();
    fill(0);
    for(var i=0; i<100; i++){
        ellipse(i*5, 10*i, 10, 10);
        ellipse(i*5, 10*i+20, 10, 10);
        ellipse(i*5, 10*i+40, 10, 10);
        ellipse(i*5, 10*i+80, 10, 10);
        ellipse(i*5, 10*i+100, 10, 10);
        ellipse(i*5, 10*i+120, 10, 10);
        ellipse(i*5, 10*i+140, 10, 10);
        ellipse(i*5, 10*i+160, 10, 10);
        ellipse(i*5, 10*i+180, 10, 10);
        ellipse(i*5, 10*i+200, 10, 10);
        ellipse(i*5, 10*i+220, 10, 10);
        ellipse(i*5, 10*i+300, 10, 10);
        ellipse(i*5, 10*i+320, 10, 10);
        ellipse(i*5, 10*i+340, 10, 10);
        ellipse(i*5, 10*i+360, 10, 10);
        ellipse(i*5, 10*i+380, 10, 10);
    }

    for(var i=0; i<10; i++){
        ellipse(i*100-50, i*5, 20, 20);
        ellipse(i*100-40, i*5+30, 25, 25);
        ellipse(i*100-25, i*5+60, 30, 30);
        ellipse(i*100+250, i*5+400, 20, 20);
        ellipse(i*100+260, i*5+430, 25, 25);
        ellipse(i*100+275, i*5+460, 30, 30);
        
    }
}

    function mousePressed(){
        saveCanvas("sketch-01", "png");
    }