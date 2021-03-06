'use strict';

//TODO 1.1 Require de las escenas, play_scene, gameover_scene y menu_scene.
//***
var PlayScene = require('./play_scene');
var GameOver = require('./gameover_scene');
var MenuScene = require('./menu_scene');
//var fondoJuego= require('./play_scene');

//  The Google WebFont Loader will look for this object, so create it before loading the script.


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
    this.game.load.spritesheet('button', 'images/buttons.png', 168, 70);
    this.game.load.image('logo', 'images/phaser.png');
    //this.game.load.image('fondo', 'images/fondo.png');
  },

  create: function () {
    //this.game.state.start('preloader');
      this.game.state.start('menu');
      //this.fondoJuego = this.game.add.sprite( 0, 0, 370, 550, 'fondo'); 
     
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(100,300, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5); 
    this.game.load.setPreloadSprite(this.loadingBar);
    this.game.stage.backgroundColor = "#000000";
    

      this.load.onLoadStart.add(this.loadStart, this);
      //TODO 2.1 Cargar el tilemap images/map.json con el nombre de la cache 'tilemap'.
      //la imagen 'images/simples_pimples.png' con el nombre de la cache 'tiles' y
      // el atlasJSONHash con 'images/rush_spritesheet.png' como imagen y 'images/rush_spritesheet.json'
      //como descriptor de la animación.
      //***MOD 1a Y 3a
      this.game.load.tilemap('tilemap', 'images/map.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('tiles','images/simples_pimples.png');
      this.game.load.atlasJSONHash('rush_idle01','images/rush_spritesheet.png','images/rush_spritesheet.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


      //TODO 2.2a Escuchar el evento onLoadComplete con el método loadComplete que el state 'play'
      //***
     // game.addEventListener('onLoadComplete', this.loadComplete);
     this.game.load.onLoadComplete.add(this.loadComplete,this);
  
  },

  loadStart: function () {
    
    console.log("Game Assets Loading ...");
    this.game.state.start('play');
  },
    
    
     //TODO 2.2b function loadComplete()
    loadComplete: function () {
        this._ready = true;       
    },
    
    update: function(){
        this._loadingBar
    }
};


var wfconfig = {
 
    active: function() { 
        console.log("font loaded");
        init();
        
    },
 
    google: {
        families: ['Sniglet']
    }
};
 
function init () {

   var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

      game.state.add('boot', BootScene);
      game.state.add('preloader', PreloaderScene);
      game.state.add('play',PlayScene);
      game.state.add('gameOver', GameOver);
      game.state.add('menu', MenuScene);
      game.state.start('boot');
      

 };
//TODO 3.2 Cargar Google font cuando la página esté cargada con wfconfig.
//TODO 3.3 La creación del juego y la asignación de los states se hará en el método init().

window.onload = function () {
      //var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
      //TODO 1.2 Añadir los states 'boot' BootScene, 'menu' MenuScene, 'preloader' PreloaderScene, 'play' PlayScene, 'gameOver' GameOver.
       WebFont.load(wfconfig); 
     //TODO 1.3 iniciar el state 'boot'.  
     //this.game.state.start('boot');
         
};
