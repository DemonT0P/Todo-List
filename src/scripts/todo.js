import { DomTodo, removeTodoFromDom } from "./dom";
import { addTodoToProject, AllProjects, currentProject } from "./projects";

class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

let popupTodo = document.querySelector(".add-todo");

let formAddTodoSubmit = document.querySelector("#add-todo__form");
formAddTodoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#form__title").value;
  let description = document.querySelector("#form__description").value;
  let date = document.querySelector("#form__date").value;

  let todo = new Todo(title, description, date);
  addTodoToProject(todo);
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

export function deleteTodo(todo) {
  let project = AllProjects.find((item) => item.name == currentProject);
  removeTodoFromDom(AllProjects.indexOf(project));
  project.todoList.splice(project.todoList.indexOf(todo));
  AllProjects[AllProjects.indexOf(project)] = project;
}
