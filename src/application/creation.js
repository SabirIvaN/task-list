import { Task } from "../domain/task.js";   // Importing a class to create a Tasks object

// Function to create a task
export const creation = () => {
    let tasks = window.localStorage.getItem("tasks");
    let value = document.getElementById("task-title").value;
    
    if (tasks === null) {
        tasks = [new Task(value, false)];
        
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
        window.location.reload();
    } else {
        try {
            tasks = JSON.parse(tasks);

            tasks.push(new Task(value, false));

            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            window.location.reload();
        } catch (e) {
            window.localStorage.removeItem("tasks");
        }
    }
};
