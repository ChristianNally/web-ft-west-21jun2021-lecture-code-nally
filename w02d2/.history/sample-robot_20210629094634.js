// const start = Date.now();

function sleepFor(sleepDuration) {
  const nowObject = new Date();
//  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

//
// Look
//
console.log("Look");
sleepFor(500);

//
// Get Up
//
console.log("Get Up");
sleepFor(5000);

//
// Walk
//
console.log("Walk");
sleepFor(8000);

//
// openTheDoor
//
console.log("Open The Door");
sleepFor(3000);

//
// walkThroughTheDoor
//
console.log("Walk Through The Door");
sleepFor(4000);


//console.log("I am done being programmed.");
