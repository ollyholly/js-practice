const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Olly" },
          { id: 2, username: "Holly" }
        ],
        "/about": "This is the about page!"
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then(res => {
    console.log("Status: ", res.status);
    console.log("Data: ", res.data);
    console.log("😘 Yay!");
  })
  .catch(res => {
    console.log("Status: ", res.status);
    console.log("🤪 Nay!");
  });

fakeRequest("/about")
  .then(res => {
    console.log("Status: ", res.status);
    console.log("Data: ", res.data);
    console.log("😘 Yay!");
  })
  .catch(res => {
    console.log("Status: ", res.status);
    console.log("🤪 Nay!");
  });

fakeRequest("/cats")
  .then(res => {
    console.log("Status: ", res.status);
    console.log("Data: ", res.data);
    console.log("😘 Yay!");
  })
  .catch(res => {
    console.log("Status: ", res.status);
    console.log("🤪 Nay!");
  });
