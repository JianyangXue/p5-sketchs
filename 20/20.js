let bigF2;


function preload(){
	bigF2 = loadImage('image/bigF2.png');
}

function setup(){
    var c = createCanvas(1000,1000);
    noStroke();

    image(bigF2,0,0);


    unitSize = 10;
    for(i=0; i<height; i=i+unitSize){
    	for(j=0; j<width; j=j+unitSize){
    		pixelColor = get(j, i);

    	fill(pixelColor);
    	randomSize = random(1,15);
    	rect(j,i,randomSize,randomSize);
    	}
    	
    }

    	


}



function mousePressed(){
    saveCanvas("sketch-20", "png");
}