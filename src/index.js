import './style.css';
import tasks, { submit, listContainer, addDragAndDropListeners } from './modules/tasks.js';
import TaskStatus from './modules/updateStatus.js';

window.onload = () => {
  tasks.displayTasks();
  TaskStatus.updateStatus();
  TaskStatus.clearCompleted();
  addDragAndDropListeners();
};
const refersh = document.querySelector('.refresh');
refersh.addEventListener('click', () => {
  window.location.reload();
});

submit.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tasks.addTask();
    submit.value = '';
    listContainer.innerHTML = '';
    tasks.displayTasks();
    TaskStatus.updateStatus();
  }
});