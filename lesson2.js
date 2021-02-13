// Challenge 2 : Define and use a function in a new file

const showName = (name) => {
    console.log(`Hello ${name} !`);
    console.log("Welcome to the UDEMY course !");
};

const showDate = () => {
    console.log(`Current Timestamp is : ${Date.now()}`);
};

module.exports = { showName, showDate };
