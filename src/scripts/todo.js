import { DomTodo } from "./dom";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

let popupTodo = document.querySelector(".add-todo");

let formAddTodoSubmit = document.querySelector("#add-todo__form");
formAddTodoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#form__title").value;
  let description = document.querySelector("#form__description").value;
  let date = document.querySelector("#form__date").value;
  let priority = document.querySelector("#form__priority").value;
  let todo = new Todo(title, description, date, priority);
  DomTodo(todo);

  popupTodo.close();
});

document.querySelector(".options__add-todo").addEventListener("click", () => {
  popupTodo.showModal();
});

document
  .querySelector("#form__cancel-button-todo")
  .addEventListener("click", () => {
    popupTodo.close();
  });
