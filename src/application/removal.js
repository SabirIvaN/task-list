// Function to delete the Tasks object
export const removal = (index) => {
    let tasks = window.localStorage.getItem('tasks');

    try {
        tasks = JSON.parse(tasks);
        tasks = tasks.filter((x) => x !== tasks[index]);

        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        window.location.reload();
    } catch (e) {
        console.log(e);
        
        window.localStorage.removeItem('tasks');
    }
}
