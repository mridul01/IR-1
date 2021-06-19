class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    jet1 = createSprite(50,200,30,30);
    //jet1.addImage("jet1",j1);
    jet2 = createSprite(50,300,30,30);
   //jet2.addImage("jet2",j2);
    jet3 = createSprite(50,400,30,30);
   // jet3.addImage("jet3",j3);
    jet4 = createSprite(50,500,30,30);
   // jet4.addImage("jet4",j4);
    jets = [jet1,jet2,jet3,jet4]
  }

  play(){

    form.hide();
    Player.getPlayerInfo();
    

    if(allPlayers !== undefined){
      background(bg);
    var index = 0
    var y= 100 
    var x 
      for(var plr in allPlayers){
        index = index+1
         y = y+65
        x = displayWidth-allPlayers[plr].distance
        jets[index-1].y=y
        jets[index-1].x=x
      
        if (index === player.index){
          jets[index-1].shapeColor = "blue"
          camera.position.y = displayHeight/2
          camera.position.x = jets[index-1].x

        }
      }
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}
