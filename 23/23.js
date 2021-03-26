function setup(){
    var c = createCanvas(1000,1000);
    background(255);



  for(i=0; i<100; i++){
stroke(0);
     line(200, 150+i*5, 100, 100);
  }
  for(i=0; i<40; i++){
stroke(0);
  line(200+i*6, 150, 100, 100);
  }
  for(i=0; i<30; i++){
  stroke(0);

  line(200+i*6, 400, 100, 100);
  }


}

function mousePressed(){
    saveCanvas("sketch-23", "png");
}