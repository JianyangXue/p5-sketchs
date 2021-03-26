let bigF;


function preload(){
	bigF = loadImage('image/bigF.png');
}

function setup(){
    var c = createCanvas(1000,1000);
    noStroke();
    background(255);
    image(bigF,0,0);


    unitSize = 10;
    for(i=0; i<height; i=i+unitSize){
    	for(j=0; j<width; j=j+unitSize){
    		pixelColor = bigF.get(j, i);

    	fill(pixelColor);
    	randomSize = random(10,150);
    	ellipse(j,i,randomSize,randomSize);
    	}
    	
    }

    	


}

function draw(){




}



function mousePressed(){
    saveCanvas("sketch-18", "png");
}