// Inicia el juego
function start(){



  var WIDTH = 1000
  var HEIGHT = 500

  Crafty.init(WIDTH, HEIGHT, 30);

  Crafty.c("Zombie",{
    size : 20,

    init: function(){   
      this.attr({x: Math.floor(Math.random() * HEIGHT), 
                 y: Math.floor(Math.random() * WIDTH),
                 w: this.size,
                 h: this.size})    
      this.requires("DOM, Collision, Solid, Color, MoveTo").color("Red");
      
      // Con esto hacemos referencia al player
      var player = Crafty("Player");

      // Eventos, EnterFrame quiere decir que se ejecuta en cada frame
      this.bind("EnterFrame", function () {
        player = Crafty(player[0]);

        if (this.x < player.x)
          this.x++;
        else
          this.x--;

        if (this.y < player.y)
          this.y++;
        else
          this.y--;

        if(this.hit('Zombie')) {
              this.destroy();
         }

      })
    }
  });

  function createZombies(){
    (function(){
        var zombie = Crafty.e("2D, Zombie");
                  setTimeout(arguments.callee, 1000);
    })();
  };


  Crafty.c("Player",{
    size : 20,
    posX : (WIDTH / 2),
    posY : (HEIGHT / 2),

    init: function(){
      this.attr({x: this.posX, 
                 y: this.posY,
                 w: this.size,
                 h: this.size})  
      this.requires("DOM, Collision, Solid, Color").color("black");
      this.requires("Multiway").multiway({x:1.5,y:1.5}, 
                            {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180, 
                             W: -90, S: 90, D: 0, A: 180});
      
      this.css("-webkit-border-radius", "5px");
      this.css("-moz-border-radius", "5px");
      this.css("border-radius", "5px"); 
      this.css("border-style", "solid");  
      this.css("border-width", "1px");  
      this.css("border-color", "000000"); 

      // Eventos, EnterFrame quiere decir que se ejecuta en cada frame
      this.bind("EnterFrame", function () {
        player = Crafty(player[0]);

        if(this.hit('Zombie')) {
        	  alert("GAME OVER");
              this.destroy();
         }

      })
    }
  });

  var player = Crafty.e("2D, Player");
  createZombies();
  

  



};