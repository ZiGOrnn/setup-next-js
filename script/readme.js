const axios = require("axios");
const fs = require("fs");

const url =
  "https://raw.githubusercontent.com/airbnb/javascript/master/README.md";
const path = "./README.md";

const main = async () => {
  const { data } = await axios.get(url);
  if (!fs.existsSync(path)) {
    await appendFile();
  }
  fs.writeFile(path, data, "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

const appendFile = () => {
  return new Promise((resolve) => {
    fs.appendFile(path, "Learn Node FS module", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
      resolve(true);
    });
  });
};

main();
