#!/usr/bin/env node

const fs = require("fs");
const util = require("util");

const lstat = util.promisify(fs.lstat);

// using cwd command
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err);
  }
  console.log(filenames);

  // Promise. Option 1
  // const lstat = filename => {
  //   return new Promise((resolve, reject) => {
  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(lstat);
  //     });
  //   });
  // };

  // Promise. Option 2 with promisify
  const lstat = util.promisify(fs.lstat);

  // Possible but not optimal solution using array, filling it untill everything is ready.

  //   const allStats = Array(filenames.length).fill(null);

  //   for (let filename of filenames) {
  //     const index = filenames.indexOf(filename);

  //     fs.lstat(filename, (err, stats) => {
  //       if (err) {
  //         console.log(err);
  //       }

  //       allStats[index] = stats;
  //       const ready = allStats.every(stats => {
  //         return stats;
  //       });

  //       if (ready) {
  //         allStats.forEach(() => {
  //           console.log(filenames[index], stats.isFile());
  //         });
  //       }
  //     });
  //   }
});

//optional readdir call using "."
// fs.readdir(".", (err, filenames) => {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(filenames);
// });

// How to setup:
// - in package.json add "bin": { "nls": "./src/folder-list/nls.js" }
// - in nls.js file add #!/usr/bin/env node
// - run npm link
