import { Task } from "../domain/task.js";
import { tasks } from "./reading.js";
import { database } from "./connection.js";
/*
export const creation = () => {
    tasks.then(item => {
        item.push(new Task(item[item.length - 1].id + 1, document.getElementById("task-title").value, 0));
    });
    sendCreation(tasks);
};
*/
export async function creation() {
    const response = await fetch("/creation", { method: "POST", body: document.getElementById("task-title").value});
    
}