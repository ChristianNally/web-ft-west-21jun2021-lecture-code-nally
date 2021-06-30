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
function doAction(name, duration, next){
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
const look = ()=>{
  doAction("Look", 500);
}

//
// Get Up
//
const getUp = ()=>{
  doAction("Get Up", 5000);
}

//
// Walk
//
const walk = ()=>{
  doAction("Walk", 8000);
}

//
// openTheDoor
//
const openTheDoor = ()=>{
  doAction("Open The Door", 3000);
}

//
// walkThroughTheDoor
//
const walkThroughTheDoor= ()=>{
  doAction("Walk Through The Door", 4000);
}


const end = Date.now();
console.log("end:",end);
console.log("duration:",end - start);

console.log("I am done being programmed.");
