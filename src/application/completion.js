// Function to complete and resume a task
export const completion = (index) => {
    let tasks = localStorage.getItem('tasks');

    try {
        tasks = JSON.parse(tasks);

        if (tasks[index].completion === false) {
            tasks[index].completion = true;
        } else {
            tasks[index].completion = false;
        }

        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        window.location.reload();
    } catch (e) {
        window.localStorage.removeItem('tasks');
    }
};
