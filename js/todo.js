// EVENT LISTENERS
document.getElementById('todo').addEventListener('submit', handleSubmit);
document.getElementById('todo-list').addEventListener('click', handleCompleteOrDelete);
document.getElementById('clear-all').addEventListener('click', handleClearAll);

// EVENT HANDLERS
function handleSubmit(e) {
  e.preventDefault();
  let todo = document.getElementById('todoName')
  if (todo.value !== '') {
    addTodo(todo.value);
    todo.value = '';
  } else {
    alert("You forgot to type a ToDo!");
  }
}

function handleCompleteOrDelete(e) {
  switch (e.target.name) {
    case 'complete':
      completeTodo(e)
      break;
    case 'delete':
      deleteTodo(e)
      break;
  }
}

function handleClearAll(e) {
  document.getElementById('todo-list').innerHTML = '';
}

// HELPER FUNCTIONS
function addTodo(todo) {
  let ol = document.getElementById('todo-list');
  let li = document.createElement('li');
  li.innerHTML = `
    <span>${todo}</span>
    <button name='complete'>Complete</button>
    <button name='delete'>Delete</button>
  `;
  ol.appendChild(li);
}

function completeTodo(e) {
  let todo = e.target.parentNode;
  if (todo.style.textDecoration === 'line-through') {
    todo.style.textDecoration = 'none';
  } else {
    todo.style.textDecoration = 'line-through';
  }
}

function deleteTodo(e) {
  let todo = e.target.parentNode;
  todo.remove();
}
