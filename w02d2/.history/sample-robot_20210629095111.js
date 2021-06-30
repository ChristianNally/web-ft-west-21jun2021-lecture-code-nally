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

}

//
// Look
//
console.log("Look");
sleepFor(500);
console.log("Done Look");

//
// Get Up
//
console.log("Get Up");
sleepFor(5000);
console.log("Done Get");
//
// Walk
//
console.log("Walk");
sleepFor(8000);
console.log("Done Walk");
//
// openTheDoor
//
console.log("Open The Door");
sleepFor(3000);
console.log("Done Open");
//
// walkThroughTheDoor
//
console.log("Walk Through The Door");
sleepFor(4000);
console.log("Done Walk");

//console.log("I am done being programmed.");
