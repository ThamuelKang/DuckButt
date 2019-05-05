let img;
let flower;
let lotus;
let leaf;
let tulip;
var bigEye = 1;
var cnv;



function preload() {
  img = loadImage('images/okay.png');
  flower = loadImage('images/flower1.png');
  lotus = loadImage('images/flower.png');
  leaf = loadImage('images/leaf.png');
  star = loadImage('images/star.png');
  tulip = loadImage('images/tulip.png');
  heart = loadImage('images/heart.png');

}

function setup() {
  pixelDensity(4);
  cnv = createCanvas(600, 600);
  centerCanvas();


}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function draw() {

  image(img, 0, 0, width, height);

  print(bigEye);

  ellipse(280, 180, 14 + bigEye, 14 + bigEye);
  fill('#000000');
  ellipse(277 + mouseX / 100, 178 + mouseY / 100, 8 + bigEye/2, 8 + bigEye/2);
  fill('#FFFFFF');
  print(bigEye)

  ellipse(303, 170, 14 + bigEye, 14 + bigEye);
  fill('#000000');

  ellipse(300 + mouseX / 100, 168 + mouseY / 100, 8 + bigEye/2, 8 + bigEye/2);
  fill('#FFFFFF');
  if (mouseX > 0 && mouseX < 70) {
    image(flower, 75, 250, 17, 17);
    image(flower, -5, 450, 17, 17);
    image(tulip, 280, 500, 29, 30);
    image(star, 375, 15, 29, 30);
    image(leaf, 233, 32, 17, 30);
    image(heart, 560, 430, 20, 16);
    image(heart, 30, 260, 20, 16);
    image(lotus, 345, 530, 58, 51);
  }

  if (mouseX > 60 && mouseX < 150) {
    image(flower, -5, 515, 17, 17);

    image(flower, 93, 500, 17, 17);

  }


  if (mouseX > 130 && mouseX < 200) {
    image(flower, -5, 370, 17, 17);
    image(flower, 15, 590, 17, 17);
    image(flower, 175, 505, 17, 17);
    image(tulip, 24, 75, 29, 30);
    image(star, 550, 160, 29, 30);
    image(star, 510, 530, 29, 30);
    image(star, 250, 330, 29, 30);
    image(heart, 528, 210, 20, 16);
    image(leaf, 189, 572, 17, 30);
    image(leaf, 65, 423, 17, 30);
  }


  if (mouseX > 180 && mouseX < 270) {
    image(flower, 460, 510, 17, 17);
    image(flower, 520, 406, 17, 17);
    image(star, 545, 25, 29, 30);
    image(lotus, 560, 50, 58, 51);
    image(leaf, 500, 510, 17, 30);
  }


  if (mouseX > 250 && mouseX < 320) {
    image(flower, 224, 310, 17, 17);
    image(flower, 529, 150, 17, 17);
    image(tulip, 540, 270, 29, 30);
    image(star, 450, 63, 29, 30);
    image(heart, 430, 240, 20, 16);
    image(leaf, 560, 310, 17, 30);
  }

  if (mouseX > 300 && mouseX < 370) {
    image(flower, 190, 505, 17, 17);
    image(flower, 35, 490, 17, 17);
    image(heart, 570, 530, 20, 16);
    image(leaf, 485, 350, 17, 30);
  }

  if (mouseX > 350 && mouseX < 430) {
    image(flower, 236, 470, 17, 17);
    image(star, 280, 76, 29, 30);
    image(star, 77, 286, 29, 30);
    image(lotus, 75, 340, 58, 51);
    image(heart, 52, 520, 20, 16);
    image(heart, 245, 290, 20, 16);
    image(leaf, 80, 175, 17, 30);
    image(leaf, 117, 95, 17, 30);
  }

  if (mouseX > 400 && mouseX < 570) {
    image(flower, 147, 570, 17, 17);
    image(flower, 380, 360, 17, 17);
    image(star, 11, 119, 29, 30);
    image(star, 184, 244, 29, 30);
    image(star, 50, 390, 29, 30);
    image(leaf, 330, 515, 17, 30);
    image(leaf, 155, 310, 17, 30);
  }

  if (mouseX > 550 && mouseX < 600) {
    image(flower, 444, 266, 17, 17);
    image(tulip, 450, 545, 29, 30);
    image(star, 380, 316, 29, 30);
    image(lotus, 440, 300, 58, 51);
    image(heart, 58, 30, 20, 16);

  }


  //eye
  noStroke();

  if (mouseIsPressed == true) {
    bigEye += .4;
  }
  else if (mouseIsPressed == false){
    bigEye -= 2;
    if(bigEye < 1) {
      bigEye = 1;
    }
  }
  // rect(274, 171, 14 + bigEye, 14 + bigEye, 10);
  // fill('#000000');
  // rect(274 + mouseX / 100, 171 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  // fill('#FFFFFF');
  // print(bigEye)
  //
  // rect(297, 165, 14 + bigEye, 14 + bigEye, 10);
  // fill('#000000');
  //
  // rect(297 + mouseX / 100, 165 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  // fill('#FFFFFF');
  // if (mouseIsPressed == true) {
  //   bigEye = bigEye + 2;
  //   // rect(274, 171, 14 + bigEye, 14 + bigEye, 10);
  //   // fill('#000000');
  //   // rect(274 + mouseX / 100, 171 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  //   // fill('#FFFFFF');
  //   // print(bigEye)
  //   //
  //   // rect(297, 165, 14 + bigEye, 14 + bigEye, 10);
  //   // fill('#000000');
  //   //
  //   // rect(297 + mouseX / 100, 165 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  //   // fill('#FFFFFF');
  //
  // } else if (mouseIsPressed == false) {
  //   bigEye = bigEye - 1;
  //   // rect(274, 171, 14 + bigEye, 14 + bigEye, 10);
  //   // fill('#000000');
  //   // rect(274 + mouseX / 100, 171 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  //   // fill('#FFFFFF');
  //   // print(bigEye)
  //   //
  //   // rect(297, 165, 14 + bigEye, 14 + bigEye, 10);
  //   // fill('#000000');
  //   //
  //   // rect(297 + mouseX / 100, 165 + mouseY / 100, 8 + bigEye, 8 + bigEye, 10);
  //   // fill('#FFFFFF');
  //
  // }
}
