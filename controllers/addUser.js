const chalk = require("chalk");
const { listUsers } = require("./listUsers");
const saveUsers = require("./saveUser");

const addUser = (newId, newName) => {
    const users = listUsers();
    const duplicateUsers = users.find((user) => {
        return user.id === newId;
    });

    if (!duplicateUsers) {
        users.push({ id: newId, name: newName });
        saveUsers(users);
        console.log(chalk.black.bgGreen("New User Added ! "));
    } else {
        console.log(chalk.black.bgRed("User with same ID already exists !"));
    }
};

module.exports = addUser;
