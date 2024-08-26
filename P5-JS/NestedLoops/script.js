let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  //noStroke()
  //fill(random(colorlist));
  //ellipse(mouseX, mouseY, 25, 25);
    background(1,100,100);
      var diameter = 100;

      //properties
      fill(230,30,100);
      noStroke();

      //circle
      for(var i = 0; i < width/diameter; i = i + 1){
        for(var j = 0; j < height/diameter; j = j + 1){
          ellipse((i * diameter) + (diameter/2),
                (j * diameter) + (diameter/2),
                diameter,
                diameter
               );
        }

        console.log(i);
      }
}