const yargs = require("yargs");
const addUser = require("./controllers/addUser");
const getUser = require("./controllers/getUser");
const { displayUsers } = require("./controllers/listUsers");
const removeUser = require("./controllers/removeUser");

yargs.version("1.0.1");

// ---------------------------------------------------------------------------------------------------
// Challenge 11 : Convert the Functions such that they use Arrow functions / ES6 Patterns
// ---------------------------------------------------------------------------------------------------

// Getting Command Line Arguments
// console.log(process.argv);
// console.log(yargs.argv);

// --------------------------------------------------------------------------------------
// Challenge 5 : Add a second parameter for add command as "ID" (number)
// --------------------------------------------------------------------------------------

// Adding a User
yargs.command({
    command: "add",
    describe: "Add a New User",
    builder: {
        id: { type: "number", describe: "ID of User", demandOption: true },
        name: { type: "string", describe: "Name of User", demandOption: true },
    },
    handler(argv) {
        addUser(argv.id, argv.name);
    },
});

// ---------------------------------------------------------------------------------------------
// Challenge 7 : Setup Command Option and Handler Function for remove command
// ---------------------------------------------------------------------------------------------

// Removing a User
yargs.command({
    command: "remove",
    description: "Remove a User",
    builder: {
        id: { type: "number", describe: "ID of User", demandOption: true },
    },
    handler(argv) {
        removeUser(argv.id);
    },
});

// --------------------------------------------------------------------------------------------------
// Challenge 4 : Add Two Commands "read" & "list" for get command using yargs module
// Challenge 13 : Complete the handler function for the get command 
// --------------------------------------------------------------------------------------------------

// Getting a User
yargs.command({
    command: "get",
    description: "Get a User",
    builder: {
        id: { type: "number", describe: "ID of User", demandOption: true },
    },
    handler(argv) {
        getUser(argv.id);
    },
});

// ----------------------------------------------------------------------------
// Challenge 12 : Complete the handler function for the list command 
// ----------------------------------------------------------------------------

// Listing all Users
yargs.command({
    command: "list",
    description: "Listing All Users",
    handler() {
        displayUsers();
    },
});

// Parses all the Arguments & Performs specific operations
yargs.parse();