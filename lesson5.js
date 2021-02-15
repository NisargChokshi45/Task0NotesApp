// ---------------------------------------------------------
// Challenge 6 : Work with JSON and the File System
// ---------------------------------------------------------

const fs = require("fs");

const data = fs.readFileSync("./sample.json", { encoding: "utf-8" });
// data is of type STRING

const dataJSON = JSON.parse(data);
// dataJSON is of type OBJECT

dataJSON.name = "Bacancy Technology";
dataJSON.id = "101";
console.log(dataJSON);

const dataString = JSON.stringify(dataJSON);
// dataString is of type STRING

fs.writeFileSync("./sample.json", dataString, { encoding: "utf-8" });
