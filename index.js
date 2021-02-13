const yargs = require("yargs");
yargs.version("1.0.1");

// Getting Command Line Arguments
// console.log(process.argv);
// console.log(yargs.argv);

// --------------------------------------------------------------------------------------
// Challenge 5 : Add a second parameter for the argument called "ID" (number)
// --------------------------------------------------------------------------------------

yargs.command({
    command: "add",
    describe: "Add a New User",
    builder: {
        id: { type: "number", describe: "ID of User", demandOption: true },
        name: { type: "string", describe: "Name of User", demandOption: true },
    },
    handler(argv) {
        console.log(`ID : ${argv.id}`);
        console.log(`Name : ${argv.name}`);
    },
});

yargs.command({
    command: "remove",
    description: "Remove a User",
    handler() {
        console.log("Removing a User !");
    },
});

// -----------------------------------------------------------------------------
// Challenge 4 : Add Two Commands "read" & "list" using yargs module
// -----------------------------------------------------------------------------

yargs.command({
    command: "get",
    description: "Get a User",
    handler() {
        console.log("Getting a User !");
    },
});

yargs.command({
    command: "list",
    description: "Listing All Users",
    handler() {
        console.log("Listing All Users !");
    },
});


// Parses all the Arguments & Performs specific operations
yargs.parse();