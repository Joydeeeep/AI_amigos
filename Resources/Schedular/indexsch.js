let selectedTask = '';

function selectTask(task) {
    selectedTask = task;
}

function addTask(cell) {
    if (selectedTask) {
        cell.innerText = selectedTask;
        cell.style.backgroundColor = getTaskColor(selectedTask);
        cell.style.color = '#333'; /* Black text color */
    }
}

function getTaskColor(task) {
    switch (task) {
        case 'School': return '#e6f3f8';
        case 'Study': return '#ffebeb';
        case 'Break': return '#fff7e6';
        case 'Friends': return '#f1e8e6';
        case 'Activity': return '#e6ffed';
        case 'Homework': return '#e6f7ff';
        default: return '#ffffff';
    }
}

function resetSchedule() {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff';
        cell.style.color = '#333';
    });
}