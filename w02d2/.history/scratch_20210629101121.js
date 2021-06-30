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

console.log("presleep");
sleepFor(10000);
console.log("postsleep");

console.log("end");
