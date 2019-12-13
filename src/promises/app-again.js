const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve({ status: 200 });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest()
  .then(res => {
    console.log(res.status);
    console.log("😘 Yay!");
  })
  .catch(res => {
    console.log(res.status);
    console.log("🤪 Nay!");
  });
