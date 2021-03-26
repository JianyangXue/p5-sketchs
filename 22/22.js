function setup(){
    var c = createCanvas(1000,1000);
    background(random(0, 225));



    for(i=0; i<100; i++){
        noStroke();
        fill(random(0,255),90, 500);
        circle(200, 150+i*5, 100, 100);
    }
	for(i=0; i<40; i++){
	noStroke();
	fill(random(0,255),90, 120);
	circle(200+i*6, 150, 100, 100);
	}
	for(i=0; i<30; i++){
	noStroke();
	fill(random(0,255),150, 120);
	circle(200+i*5, 400, 100, 100);
	}

}

function mousePressed(){
    saveCanvas("sketch-22", "png");
}