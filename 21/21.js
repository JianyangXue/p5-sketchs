let bigF3;


function preload(){
	bigF3 = loadImage('image/bigF3.png');
}

function setup(){
    var c = createCanvas(1000,1000);
    noStroke();

    // image(bigF3,0,0);


    unitSize = 10;
    for(i=0; i<height; i=i+unitSize){
    	for(j=0; j<width; j=j+unitSize){
    		pixelColor = bigF3.get(j, i);

    	fill(pixelColor);
    	randomSize = random(random(10), random(150));
    	ellipse(j,i,randomSize,randomSize);
    	}
    	
    }

    	


}



function mousePressed(){
    saveCanvas("sketch-21", "png");
}