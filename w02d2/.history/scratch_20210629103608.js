const start = Date.now();
console.log("start:",start);

function sleepFor(sleepDuration) {
  const nowObject = new Date();
  const startTime = nowObject.getTime();
  const endTime = startTime + sleepDuration;
  while (new Date().getTime() < endTime) {
    /* do nothing */
  }
}

const nameOfFunction = () => {
  console.log('monkey fuzz!');
};

setTimeout( nameOfFunction, 4444 );

console.log("presleep 1");
sleepFor(333); // blocking
console.log("postsleep 1");

const end = Date.now();
console.log("end:",end);
console.log("duration:",end - start);