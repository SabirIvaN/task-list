import { Task } from "../domain/task.js";

const database = import("../database/database.json", { assert: { type: 'json' } });

export const Tasks = database.then(item => {
    let array = [];
    item.default.forEach(item => {
        array.push(new Task(item.id, item.title, item.completion));
    });
    return array;
});