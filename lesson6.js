const toDoList = {
    tasks: [
        {
            text: "Grocery Shopping",
            completed: false,
        },
        {
            text: "Bacancy Visit",
            completed: true,
        },
        {
            text: "Hackathon Leave Approval",
            completed: false,
        },
        {
            text: "Centre Relocation Request",
            completed: true,
        },
        {
            text: "Tour Form Submission",
            completed: true,
        },
    ],
    getCompletedTasks() {
        const completedTasks = this.tasks.filter((task) => {
            return task.completed === true;
        });
        return completedTasks;
    },
    getPendingTasks() {
        const pendingTasks = this.tasks.filter((task) => {
            return task.completed === false;
        });
        return pendingTasks;
    },
};

console.log(toDoList.getPendingTasks());
