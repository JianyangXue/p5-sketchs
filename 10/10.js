

function setup(){
    var c = createCanvas(1000,1000);
    background(0);

stroke(255);
strokeWeight(2);
noFill();


for(var i=0; i<10; i++){

    startX = 0;
    startY = i*10
    distanceX = 1000;
    endY = i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<100; i++){

    startX = 0;
    startY = i*10
    distanceX = 250;
    endY = i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<20; i++){

    startX = 1000;
    startY = i*10
    distanceX = 700;
    endY = i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<30; i++){

    startX = 1000;
    startY = 200+i*10
    distanceX = 350;
    endY = 200+i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<10; i++){

    startX = 1000;
    startY = 500+i*10
    distanceX = 600;
    endY = 500+i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<100; i++){

    startX = 1000;
    startY = 600+i*10
    distanceX = 350;
    endY = 600+i*10;

    line(startX,startY,distanceX,endY);
}

for(var i=0; i<10; i++){

    startX = 250;
    startY = 900+i*10
    distanceX = 350;
    endY = 900+i*10;

    line(startX,startY,distanceX,endY);
}


    

}

function mousePressed(){
    saveCanvas("sketch-10", "png");
}