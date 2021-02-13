const fs = require("fs");

// -------------------------------  SYNC CODE PATTERN  ---------------------------------------------------
// fs.writeFileSync('./sample.txt', "This file is created using Node FS module. ", { encoding: "utf-8" });

// const data = fs.readFileSync("./sample.txt", { encoding: "utf-8" });
// console.log(data);

// // Challenge 1 : Append a Message to sample.txt using appendFileSync()
// fs.appendFileSync("./sample.txt", "This line is getting Appended at the end of the File.", { encoding: "utf-8" });
// const updatedData = fs.readFileSync("./sample.txt", { encoding: "utf-8" });
// console.log(updatedData);

// -----------------------  ASYNC CODE PATTERN   ( USING ASYNC - AWAIT ) ---------------------------------
const writeIntoFile = async (fileName) => {
    try {
        await fs.writeFile(
            fileName,
            "The file is created using the Async approach of Programming using NodeJS. ",
            { encoding: "utf-8" },
            (err) => {
                if (err) console.log("Error Writing into File + ", err);
                else console.log("Sucessfully written into File !");
            }
        );
    } catch (e) {
        console.log("Error : ", e);
    }
};

const start = async () => {
    await writeIntoFile("./sample.txt");
};

start();
