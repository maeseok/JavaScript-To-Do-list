const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoInput.value = "";
  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  span.innerText = newTodo.text;
  li.id = newTodo.id;
  toDoList.appendChild(li);
  li.appendChild(button);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedToDos();
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(ToDos_KEY);
const ToDos_KEY = "todos";

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.array.forEach((item) => console.log("~~", item));
}
