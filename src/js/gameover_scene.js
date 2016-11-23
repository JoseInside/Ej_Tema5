var GameOver = {
    create: function () {
        console.log("Game Over");
        var button = this.game.add.button(400, 300, 
                                          'button', 
                                          this.actionOnClick, 
                                          this, 2, 1, 0);
        button.anchor.set(0.5);
        var goText = this.game.add.text(400, 100, "GameOver");
        var text = this.game.add.text(0, 0, "Reset Game");
        var rText = this.game.add.text (400, 200, "Return Main Menu");
        text.anchor.set(0.5);
        goText.anchor.set(0.5);
        rText.anchor.set(0.5);
        button.addChild(text);
        
        //TODO 8 crear un boton con el texto 'Return Main Menu' que nos devuelva al menu del juego.
         var button2 = this.game.add.button(400, 50, 
                                          'button2', 
                                          this.actionOnClick, 
                                          this, 2, 1, 0);
    },
    
    //TODO 7 declarar el callback del boton.
    callback: function (create) {
        callback();
    }
};

module.exports = GameOver;