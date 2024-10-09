const inputField = document.getElementById("inputField");
const listContainer = document.getElementById("listContainer");
const addButton = document.querySelector(".add");


window.onload = () => {
    loadTasks();
};


addButton.addEventListener("click", addTask);


function addTask() {
    let todoText = inputField.value;
    
    if (todoText) {
        createTaskElement(todoText , false);
        
        saveToLocal(todoText , false);
        
        inputField.value = "";
    }
}




function createTaskElement(todoText , isCompleated) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleated;
  checkbox.addEventListener('change', () => updateStatusInLocal(todoText, checkbox.checked));

  // item
  const span = document.createElement("span");
  span.classList.add("item");
  span.textContent = todoText;

  //delete button
  const button = document.createElement("button");
  button.textContent = "remove";
  button.classList.add("delete");
  button.onclick = () => removeTask(li, todoText);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  listContainer.appendChild(li);
}

function removeTask(listItem, todoText) {
  listItem.remove();
  removeFromLocal(todoText);
}

function saveToLocal(todoText , isCompleated) {
  let tasks = getFromLocal();
  tasks.push({ text: todoText, checked: isCompleated });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function updateStatusInLocal(todoText, isCompleated) {
    let tasks = getFromLocal();
    tasks = tasks.map(task => 
        task.text === todoText ? { text: todoText, checked: isCompleated } : task
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocal(todoText) {
  let tasks = getFromLocal();
  tasks = tasks.filter((task) => task.text !== todoText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getFromLocal() {
  let tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
  let tasks = getFromLocal();
  tasks.map((task) => {
    createTaskElement(task.text, task.checked);
  });
}
