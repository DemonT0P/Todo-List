export function DomTodo(todo) {
  let content = document.querySelector(".content");

  let todoBlueprint = document.createElement("div");
  todoBlueprint.setAttribute("class", "content__todo");

  let title = document.createElement("div");
  title.setAttribute("class", "todo__title");
  title.innerText = todo.title;

  let description = document.createElement("div");
  description.setAttribute("class", "todo__description");
  description.innerText = todo.description;

  let dueDate = document.createElement("div");
  dueDate.setAttribute("class", "todo__due-date");
  dueDate.innerText = todo.dueDate;

  let done = document.createElement("input");
  done.setAttribute("class", "todo__done");
  done.setAttribute("name", "todo__done");
  done.setAttribute("type", "checkbox");

  todoBlueprint.append(title);
  todoBlueprint.append(description);
  todoBlueprint.append(dueDate);
  todoBlueprint.append(done);

  content.appendChild(todoBlueprint);
}

export function DomProjects(project) {
  let sidebar = document.querySelector(".sidebar");
  let projectBlueprint = document.createElement("div");
  projectBlueprint.setAttribute("class", "sidebar__project");
  projectBlueprint.innerText = project.name;
  sidebar.appendChild(projectBlueprint);
}
