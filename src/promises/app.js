const randomTimeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand < 0.5) {
      reject();
    } else {
      resolve();
    }
  }, 500);
});

randomTimeout
  .then(() => {
    console.log("🥳 Resolved!!");
  })
  .catch(() => {
    console.log("🤯 Rejected!!");
  });

// const willGetYouADog = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 500);
// });
// willGetYouADog
//   .then(() => {
//     console.log("YAY WE GOT A DOG!!!!");
//   })
//   .catch(() => {
//     console.log(":( NO DOG");
//   });
