// Function to delete the Tasks object
export const removal = (index) => {
    let tasks = localStorage.getItem('tasks');

    try {
        tasks = JSON.parse(tasks);
        
        delete tasks[index];

        let filtered = tasks.filter((x) => {
            return x !== null;
        });

        window.localStorage.setItem('tasks', JSON.stringify(filtered));
        window.location.reload();
    } catch (e) {
        console.log(e);
        
        window.localStorage.removeItem('tasks');
    }
}
