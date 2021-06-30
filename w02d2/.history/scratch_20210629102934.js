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

const nameOfFunction = () => {
  console.log('monkey fuzz!');
};

setTimeout( nameOfFunction, 4444 );

console.log("presleep 1");
sleepFor(3000); // blocking
console.log("postsleep 1");

console.log("presleep 2");
sleepFor(2000); // blocking
console.log("postsleep 2");

const end = Date.now();
console.log("end:",end);
console.log("duration:",end - start);