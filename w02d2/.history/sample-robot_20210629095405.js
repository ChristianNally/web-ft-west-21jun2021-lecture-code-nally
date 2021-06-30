// const start = Date.now();

function sleepFor(sleepDuration) {
  const nowObject = new Date();
//  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

function doAction(name, duration){
  console.log(`Starting ${name}`);
  sleepFor(duration);
  console.log(`Ending ${name}`);
}

//
// Look
//
doAction("Look", 500);

//
// Get Up
//
doAction("Get Up", 5000);

//
// Walk
//
doAction("Walk", 8000);

//
// openTheDoor
//
doAction("Open The Door", 3000);

//
// walkThroughTheDoor
//
doAction("Walk Through The Door", 4000);


//console.log("I am done being programmed.");
