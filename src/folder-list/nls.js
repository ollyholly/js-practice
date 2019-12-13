#!/usr/bin/env node

const fs = require("fs");

// using cwd command
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err);
  }
  console.log(filenames);

  // Possible but not optimal solution using array, filling it untill everything is ready.

  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      allStats[index] = stats;
      const ready = allStats.every(stats => {
        return stats;
      });

      if (ready) {
        allStats.forEach(() => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
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
