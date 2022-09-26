let data = document.querySelector("#task");
let btn = document.querySelector("#liveToastBtn");
let ulDom = document.querySelector("#list");

btn.addEventListener("click", newElement);
document.addEventListener("DomContentLoaded", StartStorage());

let toast = document.querySelector("#liveToast");
let toast_button = document.querySelector("#toast_close");

toast_button.addEventListener("click", () => {
  toast.className = "toast success hide";
});

function StartStorage() {
  const todos = StorageList();
  todos.forEach((todo) => {
    createList(todo);
  });
}
function toastOpen() {
  toast.className = "toast success show";
}
function newElement(todo) {
  if (data.value) {
    createList(data.value);
    createStorage(data.value);
    toastOpen();
  } else {
  }
}
function createList(todo) {
  const liDom = document.createElement("li");
  liDom.innerHTML = todo;
  ulDom.appendChild(liDom);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.textContent = "\u00D7";
  liDom.append(closeBtn);
  liDom.onclick = checkTodo;
  closeBtn.onclick = removeList;
}
function checkTodo() {
  this.classList.toggle("checked");
}
function removeList() {
  this.parentElement.remove();
  deleteItem(this.previousSibling.textContent);
}
function deleteItem(text) {
  let todos = StorageList();
  todos.forEach((todo, index) => {
    if (todo === text) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function StorageList() {
  let todo;
  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"));
  }
  return todo;
}
function createStorage(todo) {
  let todos = StorageList();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
