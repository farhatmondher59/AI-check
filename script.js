const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

function addTask() {
    if(taskInput.value.trim() === '') return alert('Please enter a task');
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}

function handleTaskClick(e) {
    if(e.target.tagName === 'BUTTON' && e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if(e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
}
