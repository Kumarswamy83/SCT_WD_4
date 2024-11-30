const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const tasksList = document.getElementById('tasks');

// Event listener for task form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = taskInput.value.trim();
    const dateTime = taskDateTime.value;

    if (taskName && dateTime) {
        addTask(taskName, dateTime);
        taskForm.reset();
    } else {
        alert('Please provide both task details and a date/time.');
    }
});

// Function to add a task
function addTask(taskName, dateTime) {
    const taskItem = document.createElement('li');

    const taskDetails = document.createElement('span');
    taskDetails.textContent = `${taskName} (${new Date(dateTime).toLocaleString()})`;

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', () => {
        taskDetails.classList.toggle('completed');
        completeBtn.disabled = true;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        tasksList.removeChild(taskItem);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskDetails);
    taskItem.appendChild(actions);
    tasksList.appendChild(taskItem);
}
