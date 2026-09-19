let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const counter = document.getElementById("counter");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  const task = {
    id: Date.now().toString(),
    text: text,
    completed: false
  };

  tasks.push(task);

  taskInput.value = "";

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  renderTasks();
}

function toggleTask(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].completed = !tasks[i].completed;
    }
  }
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(function (task) {
    return task.completed === false;
  });
  renderTasks();
}

function renderTasks() {
  todoList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-message";
    emptyItem.textContent = "No tasks yet. Add one above!";
    todoList.appendChild(emptyItem);
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    li.className = "todo-item";

    const check = document.createElement("div");
    check.className = "todo-check";
    if (task.completed) {
      check.classList.add("completed");
      check.textContent = "✓";
    }
    check.onclick = function () {
      toggleTask(task.id);
    };

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✕";
    deleteBtn.onclick = function () {
      deleteTask(task.id);
    };

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }

  const completedCount = tasks.filter(function (t) {
    return t.completed;
  }).length;

  if (tasks.length === 0) {
    counter.textContent = "0 tasks";
  } else {
    counter.textContent =
      tasks.length + " tasks (" + completedCount + " completed)";
  }
}

addBtn.onclick = addTask;

taskInput.onkeydown = function (event) {
  if (event.key === "Enter") {
    addTask();
  }
};

clearCompletedBtn.onclick = clearCompleted;

renderTasks();