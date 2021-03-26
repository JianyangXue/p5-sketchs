function setup(){
    var c = createCanvas(1000,1000); //// weights and heights
    background(255);
    noFill();


    for(i=0; i<500; i=i+8){
        ellipse(300+i,200,50,50);
        ellipse(300+i,180,50,50);
        ellipse(300+i,160,50,50);
        ellipse(300+i,170,50,50);
    }

    for(i=0; i<300; i=i+8){
        ellipse(300+i,500,50,50);
        ellipse(300+i,520,50,50);
        ellipse(300+i,480,50,50);
        ellipse(300+i,510,50,50);
    }

    for(i=0; i<1000; i=i+8){
        
        ellipse(300,220+i,50,50);
        ellipse(300+i/8,220+i,50,50);
        ellipse(300+i/9,220+i,50,50);
        ellipse(300+i/10,220+i,50,50);
        ellipse(300+i/11,220+i,50,50);
        ellipse(300+i/12,220+i,50,50);
        ellipse(300+i/13,220+i,50,50);
        ellipse(300+i/14,220+i,50,50);
        ellipse(300+i/15,220+i,50,50);
        ellipse(300+i/16,220+i,50,50);
        ellipse(300+i/17,220+i,50,50);
        ellipse(300+i/18,220+i,50,50);
        ellipse(300+i/19,220+i,50,50);
        ellipse(300+i/20,220+i,50,50);
        ellipse(300+i/21,220+i,50,50);
        ellipse(300+i/22,220+i,50,50);
        ellipse(300+i/30,220+i,50,50);
        ellipse(300+i/34,220+i,50,50);
        ellipse(300+i/37,220+i,50,50);
        ellipse(300+i/40,220+i,50,50);
        ellipse(300+i/34,220+i,50,50);
        ellipse(300+i/50,220+i,50,50);
        ellipse(300+i/54,220+i,50,50);
        ellipse(300+i/58,220+i,50,50);
        ellipse(300+i/70,220+i,50,50);
        ellipse(300+i/74,220+i,50,50);
        ellipse(300+i/78,220+i,50,50);


        
    }
}





function mousePressed(){
    saveCanvas("sketch-01", "png");
}