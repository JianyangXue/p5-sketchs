function setup(){
    var c = createCanvas(1000,1000);
    background(0);


    stroke(0);
    fill(255);




//////////////////////////////////// vertical part /// first line
    rect(350, 150, 40, 150);
    rect(350, 310, 40, 150);  
    rect(350, 430, 40, 40);
    rect(350, 470, 40, 150);
    rect(350, 540, 40, 150);
    rect(350, 680, 40, 40);
    rect(350, 720, 40, 70);
    rect(350, 790, 40, 100);

    /// second line
    rect(390, 340, 40, 20);
    rect(390, 360, 40, 150);
    rect(390, 500, 40, 40); 
    rect(390, 540, 40, 80); 
    rect(390, 620, 40, 100);
    rect(390, 720, 40, 40); 
    rect(390, 760, 40, 170); 

    /// thired line
    rect(430, 370, 40, 40);
    rect(430, 410, 40, 100);
    rect(430, 510, 40, 80); 
    rect(430, 590, 40, 80); 
    rect(430, 670, 40, 150);
    rect(430, 820, 40, 150);





//////////////////////////////////// upper part
    rect(300, 80, 150, 40);
    rect(340, 110, 150, 40);
    rect(380, 140, 150, 40);
    rect(420, 170, 150, 40);
    rect(460, 200, 150, 40);
    rect(500, 230, 150, 40);
////////////////////////////////////

//////////////////////////////////// middle part
    rect(350, 270, 150, 40);
    rect(390, 300, 150, 40);
    rect(430, 330, 150, 40);
    rect(470, 360, 150, 40);
    rect(510, 390, 150, 40);
    rect(550, 420, 150, 40);
////////////////////////////////////

    
    

}

function mousePressed(){
    saveCanvas("sketch-14", "png");
}