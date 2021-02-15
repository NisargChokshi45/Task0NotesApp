const fs = require("fs");
const path = require("path");

const saveUsers = (userJSON) => {
    const userData = JSON.stringify(userJSON);
    fs.writeFileSync(path.join(__dirname, "/../users.json"), userData);
};

module.exports = saveUsers;
