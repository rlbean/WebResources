const config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 1280,
    height: 720,
    backgroundColor: "#99ddff",
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },

    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

var blueClouds;
var whiteClouds;
var whiteCloudSmall;
var plane;
var coin;
//var explosion;

var isClicked = false;

function init() {

}
function preload() {
    this.load.image("blue-clouds", "assets/blue-clouds2.png");
    this.load.image("white-small-clouds", "assets/white-small2.png");
    this.load.image("white-clouds", "assets/white-cloudsZ.png");
    this.load.atlas("plane", "assets/PlaneX.png", "assets/PlaneX.json");

    //this.load.spritesheet("plane","assets/planeZZ.png",{ frameWidth: 683,frameHeight:210});
    //this.load.spritesheet("explosion", "assets/explosion.png",{frameWidth: 512, frmaeHeight: 512});
    this.load.image("coin", "assets/Moon.png");

}
function create() {
    blueClouds = this.add.image(640, 360, "blue-clouds")
    whiteCloudSmall = this.add.tileSprite(640, 360, 1280, 720, "white-small-clouds");
    whiteClouds = this.add.tileSprite(640, 360, 1280, 720, "white-clouds");

    this.anims.create({
        key: "fly",
        frameRate: 7,
        frames: this.anims.generateFrameNames("plane", {
            prefix: "planeZZ",
            suffix: ".png",
            start: 1,
            end: 3,
            zeroPad: 1
        }),
        repeat: -1
    });

    this.anims.create({
        key: "explosion",
        frameRate: 7,
        frames: this.anims.generateFrameNames("plane", {
            prefix: "explosion",
            suffix: ".png",
            start: 1,
            end: 4,
            zeroPad: 1
        }),
        repeat: 2
    });

    // this.anims.create({
    //   key: "fly",
    //   frameRate: 7,
    //   frames: this.anims. generateFrameNumbers("plane"),
    //   repeat: -1
    // });

    // this.anims.create({
    //   key: "explode",
    //   frameRate: 7,
    //   frames: this.anims.generateFrameNumbers("explosion"),
    //   repeat: 2
    // });

    //plane = this.add.sprite(683,512,"plane");
    plane = this.physics.add.sprite(100, 300, "plane");
    plane.setScale(0.25);
    plane.play("fly");
    plane.body.setSize(plane.width, plane.height);



    coin = this.physics.add.sprite(500, 300, "coin");
    coin.setScale(0.15);
    coin.setCircle(235, 10, 10);
    this.physics.add.collider(plane, coin, function(plane, coin) {
        coin.x = 1400;
        plane.play("explosion")
    });



    //explosion = this.add.sprite(512,512,"explosion");
    //explosion.setScale(0.25);
    //explosion.play("explode");
}
function update() {
    whiteClouds.tilePositionX += 1;
    whiteCloudSmall.tilePositionX += 0.25;
    coin.x -= 3;

    // if(this.input.activePointer.isDown){
    //   isClicked = true;
    // }else if (!this.input.activePointer.isDown && isClicked){
    //   isClicked = false;
    //   var explosion = this.add.sprite(
    //     this.input.activePointer.position.x,
    //     this.input.activePointer.position.y,
    //     "explosion"
    //   );
    //   explosion.on('animationcomplete', ()=> {
    //     explosion.destroy();
    //   });

    //   explosion.setScale(0.25);
    //   explosion.play("explode");
    // }
}

