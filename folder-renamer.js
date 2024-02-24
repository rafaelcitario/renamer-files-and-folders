const fs = require("fs");
const path = require("path");
const process = require("process");

let currentName = "Modulo";
let setNewName = "Module";

fs.readdir(__dirname, (err, file) => {
  file.forEach((i) => {
    if (i.includes(currentName)) {
      fs.rename(i, i.replace(currentName, setNewName), (err) => {
        if (err) throw err;
        console.log("Rename Complete!");
      });
    }
  });
});
