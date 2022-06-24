class Game {
  constructor() {}

  getState() {
    var stateInfo = database.ref("gameState");
    stateInfo.on("value", (data) => {
      myGameState = data.val();
    });
    console.log(myGameState);
  }

  updateState(stateNumber) {
    database.ref("/").update({
      gameState: stateNumber,
    });
  }

  start() {
    myForm = new Form();
    myForm.display();
    myPlayer = new Player()
    myPlayer.getCount()

    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1",car1Img)
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2Img)
    car2.scale=0.07
  }

  play() {
    myForm.hide()
    myForm.titleImg.position(40,80)
    myForm.titleImg.class("chageTitle")



    if(keyDown("up")){
      myPlayer.positionY+=10
      myPlayer.updatePlayerInfo()

    }


    drawSprites()
  }

  end() {}
}
