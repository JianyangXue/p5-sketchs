function setup(){
    var c = createCanvas(1000,1000);
    background("#BBBBBB");

stroke(0);
strokeWeight(2);
fill(255);


////////////////////////////////////////// upper part
for(i=0; i<75; i++){
    let c1 = color('#8E7F7F');
    fill(c1)
    rect(20+i*10, 100/i*40, 200, 45);
}
//////////////////////////////////////////

for(i=0; i<90; i++){
    let c3 = color('#E2D5D5');
    fill(c3);
    rect(40+i*8, 650/i*30, 230, 68);
}

for(i=0; i<90; i++){
    let c2 = color('#865858');
    fill(c2);
    rect(40+i*8, 650/i*30, 200, 65);
}

for(i=0; i<90; i++){
    let c4 = color('#DBF6E9');
    fill(c4);
    rect(20+i*8, 650/i*30, 150, 63);
}

for(i=0; i<90; i++){
    let c5 = color('#FFC93C');
    fill(c5);
    rect(i*8, 650/i*30, 120, 60);
}

for(i=0; i<90; i++){
    let c6 = color('#9DDFD3');
    fill(c6);
    rect((i*8)-40, 650/i*30, 100, 60);
}

for(i=0; i<90; i++){
    let c7 = color('#E2BCB7');
    fill(c7);
    rect((i*8)-90, 650/i*30, 100, 60);
}

for(i=0; i<90; i++){
    let c8 = color('#E4D3CF');
    fill(c8);
    rect((i*8)-140, 650/i*30, 100, 60);
}





}

function mousePressed(){
    saveCanvas("sketch-12", "png");
}