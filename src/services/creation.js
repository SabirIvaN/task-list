import { Task } from "../domain/task.js";
import { tasks } from "./reading.js";
import { database } from "./connection.js";

console.log(tasks);

export const creation = () => {
    tasks.then(item => {
        item.push(new Task(item[item.length - 1].id + 1, document.getElementById("task-title").value, 0));
    });
    console.log(tasks);
};