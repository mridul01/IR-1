class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder","Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
   
  display(){
    this.title = createElement('h2');
    this.title.html("INFINITE RUNNER GAME");
    this.title.position(1000 , 10);
    this.reset.position(40,20);
    this.input.position(550, 250);
    this.button.position(730, 250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-40,  displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);

      database.ref('/').update({
        players: null
      })
    })
  }
}
