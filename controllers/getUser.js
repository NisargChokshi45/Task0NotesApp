const chalk = require("chalk");
const { listUsers } = require("./listUsers");

const getUser = (id) => {
    const users = listUsers();
    const userFound = users.find((user) => {
        return user.id === id;
    });
    if (!userFound) {
        console.log(chalk.red("Could not Found the User ! "));
    } else {
        console.log(chalk.green(userFound.name));
    }
};

module.exports = getUser;
