#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const util = require("util");
const path = require("path");

// Promise. Option 2 with promisify
// const lstat = util.promisify(fs.lstat);

// Promise. Option 3 with promise API
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

// using cwd command
fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.yellow(filenames[index]));
    } else {
      console.log(chalk.green(filenames[index]));
    }
  }

  // console.log(filenames);

  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);

  //     console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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

// Promise. Option 1
// const lstat = filename => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };

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
