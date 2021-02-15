const chalk = require("chalk");
const { listUsers } = require("./listUsers");
const saveUsers = require("./saveUser");

// ------------------------------------------------------------------------------------
// Challenge 8 : Complete the handler Function removeUser
// Challenge 9 : Using Chalk module print useful logs in removeUser function
// ------------------------------------------------------------------------------------

const removeUser = (id) => {
    const users = listUsers();
    const userFound = users.find((user) => {
        return user.id === id;
    });
    if (userFound) {
        const updatedUsers = users.filter((user) => {
            return user.id !== id;
        });
        saveUsers(updatedUsers);
        console.log(chalk.black.bgGreen("User Deleted Successfully !"));
    } else {
        console.log(chalk.black.bgRed("ID doesn't exists !"));
    }
};

module.exports = removeUser;
