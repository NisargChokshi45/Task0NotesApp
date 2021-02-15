const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const listUsers = () => {
    try {
        const users = fs.readFileSync(path.join(__dirname, "/../users.json"), {
            encoding: "utf-8",
        });
        const userJSON = JSON.parse(users);
        return userJSON;
    } catch (e) {
        return [];
    }
};

const displayUsers = () => {
    const usersJSON = listUsers();
    usersJSON.forEach((user) => {
        console.log(chalk.black.bgCyan(user.name));
    });
};

module.exports = { listUsers, displayUsers };
