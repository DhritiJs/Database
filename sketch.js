var ball;
var database,ballPos,pos;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ballPos = database.ref('ball/position');
    ballPos.on("value",readPos,showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref('ball/position').set({
       'x':pos.x+x,
       'y':pos.y+y
   })

  //  ball.x = ball.x + x;
  //  ball.y = ball.y + y;
}

function readPos(data){
    pos = data.val();
    ball.x= pos.x;
    ball.y = pos.y;
}

function showError(){
    console.log("Error");
}