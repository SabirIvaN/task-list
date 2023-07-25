import { Task } from "../domain/task.js";
import { database } from "./connection.js";

export const tasks = database.then(item => {
    let array = [];
    item.default.forEach(item => {
        array.push(new Task(item.id, item.title, item.completion));
    });
    return array;
});