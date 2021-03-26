function setup(){
    var c = createCanvas(1000,1000);
    background(255);




    for(i=0; i<650; i++){

        var distanceX = 300+i;
        var distanceY = 900-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY/i+100, 90, 70);
    }

    for(i=0; i<500; i++){

        var distanceX = 300+i;
        var distanceY = 900-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY/i+500, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 1000-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 870-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 740-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 610-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 480-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 350-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    for(i=0; i<100; i++){

        var distanceX = 300;
        var distanceY = 220-i;
        stroke(0);
        strokeWeight(0.5);
        noFill();
        ellipse(distanceX, distanceY, 90, 60);
    }

    

}

function mousePressed(){
    saveCanvas("sketch-09", "png");
}