const start = Date.now();
console.log("start:",start);

function sleepFor(sleepDuration) {
  const nowObject = new Date();
//  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}
//                "Get Up", 5000
function doAction(name, duration){
  const now = new Date();
  console.log(`${now.getTime() - start}: Starting ${name}`);
  setTimeout( ()=>{
    const then = new Date();
    console.log(`${then.getTime() - start}: Ending ${name}`);
  }, duration );
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


const end = Date.now();
console.log("end:",end);
console.log("duration:",end - start);

console.log("I am done being programmed.");
