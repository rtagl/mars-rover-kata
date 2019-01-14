// Rover Object Goes Here
// ======================

// ======================

var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(rover){

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("Rover turned left and is now facing: " + rover.direction);
}


function turnRight(rover){
  
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("Rover turned right and is now facing: " + rover.direction);
}

function moveForward(rover){

  switch (rover.direction) {
    case "N":
      rover.y -= 1;
      break;
    
    case "W":
      rover.x -= 1;
      break;
    
    case "S":
      rover.y += 1;
      break;
    
    case "E":
      rover.x += 1;
      break;
  }
  console.log("Rover moved " + rover.direction + ". New coordinates are (" + rover.x + ", " + rover.y + ")");
}

function commands(moves) {
  for(var i = 0; i < moves.length; i++) {
    if (moves[i] == 'f') {
      moveForward(rover);
      rover.travelLog.push([rover.x, rover.y]);
    }   
    else if (moves[i] == 'r') {
      turnRight(rover);
    }
    else if (moves[i] == 'l') {
      turnLeft(rover);
    }
  }
  console.log(rover.travelLog);

}
