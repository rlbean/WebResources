//programming the "on" button for the game

const App = function() {
    'use strict';

    //game version
    this.VERSION = '0.0.1';
    //running game in development mode
    this.IS_DEV = true;

};

//turn on the game and run it
App.prototype.start = function() {
    'use script';

    //Scenes
    let scenes = [];


    //Game config
    const config = {
        type: Phaser.AUTO, //WebGL or Canvas -- browser will choose
        //id for HTML div tag
        parent: 'phaser-app',
        title: 'Endless Cave',
        //site where it will be hosted. 
        //url: 'https://
        width: 360 / 2, //tile sizes are design in 16x16 so you divide this in half
        height: 640 / 2,
        scene: scenes,
        pixelArt: true, //prevent art from becoming blurred when scaled
        backgroundColor: 0xFFFFFF

    }


    //Create game app

    //Globals -- accessible throughout the game

    //Sound


}



















