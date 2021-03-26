function setup(){
    var c = createCanvas(1000,1000,WEBGL);
}

    function draw(){
        background(255);
        stroke(0);
        noFill();

        push();
        translate(-195, 250);
        rotateY(2.3);
        rotateX(0.9);
        box(100);
        pop();

        push();
        fill(120);
        translate(-200, 170);
        rotateY(2.3);
        rotateX(0.05);
        box(102);
        pop();

        push();
        translate(-205, 90);
        rotateY(2.3);
        rotateX(0.9);
        box(100);
        pop();

        push();
        fill(120);
        translate(-210, 10);
        rotateY(2.3);
        rotateX(0.05);
        box(102);
        pop();

        push();
        translate(-215, -70);
        rotateY(2.3);
        rotateX(0.9);
        box(100);
        pop();

        push();
        fill(120);
        translate(-220, -150);
        rotateY(2.3);
        rotateX(0.05);
        box(102);
        pop();

        push();
        translate(-225, -230);
        rotateY(2.3);
        rotateX(0.9);
        box(100);
        pop();

        push();
        fill(120);
        translate(-230, -310);
        rotateY(2.3);
        rotateX(0.05);
        box(102);
        pop();


///////////////////////////////////////////// upper
    push();
    translate(-125, -220);
    rotateY(2.3);
    rotateX(0.9);
    box(100);
    pop();

    push();
    translate(-35, -210);
    rotateY(2.3);
    rotateX(0.9);
    box(100);
    pop();

    push();
    translate(55, -205);
    rotateY(2.3);
    rotateX(0.9);
    box(100);
    pop();

///////////////////////////////////////////// lower
    push();
    translate(-105, 70);
    rotateY(2.3);
    rotateX(0.9);
    box(100);
    pop();



    }







function mousePressed(){
    saveCanvas("sketch-17", "png");
}