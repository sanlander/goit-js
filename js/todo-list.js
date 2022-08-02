let idItem = 0;
let item = [
  {
    id: (idItem += 1),
    text: "Купить молоко",
    isDone: true,
  },
  {
    id: (idItem += 1),
    text: "Купить пива",
    isDone: false,
  },
  {
    id: (idItem += 1),
    text: "Якщо нема пива, купить вина",
    isDone: true,
  },
  {
    id: (idItem += 1),
    text: "Винести мусор",
    isDone: true,
  },
];

const refs = {
  todoList: document.querySelector(".todo-list"),
  btnAdd: document.querySelector(".button.submit"),
  inputAddItem: document.querySelector('input[name="text"]'),
  inputSearch: document.querySelector(".input-search"),
  inputSort: document.querySelector(".sort-item-todo"),
};

const sortListToDo = () => {
  const sorted = (array) => {
    refs.inputSearch.value = "";
    const sortArr = array.map(todoNewItem).join("");

    refs.todoList.innerHTML = "";
    refs.todoList.insertAdjacentHTML("beforeend", sortArr);
  };

  switch (refs.inputSort.value) {
    case "az":
      return sorted([...item].sort((a, b) => a.text.localeCompare(b.text)));
    case "za":
      return sorted([...item].sort((a, b) => b.text.localeCompare(a.text)));
    default:
      return sorted([...item]);
  }
};
refs.inputSort.addEventListener("change", sortListToDo);

const searchFilter = () => {
  const searchFilterList = item.filter((x) =>
    x.text.includes(refs.inputSearch.value)
  );
  // console.log(e);
  console.log(searchFilterList);

  refs.todoList.innerHTML = "";
  refs.todoList.insertAdjacentHTML(
    "beforeend",
    searchFilterList.map(todoNewItem).join("")
  );
};
refs.inputSearch.addEventListener("input", searchFilter);

const todoNewItem = ({ id, text, isDone = false }) =>
  `<li style="background: silver; margin: 10px 0px; padding: 10px 30px;
  border: 1px solid grey;   box-shadow: 5px -5px 3px 2px rgb(131 222 150);
  border-radius: 4px;  " class="todo-item" data-id="${id}">
    <input type="checkbox" name="todo-done" ${isDone ? "checked" : ""} />
    <span>${text}</span>
    <button style="background: #f09737;
    border: none;
    border-radius: 50%;
    color: white;
    margin-left: 8px;" class="button delete">x</button>
  </li>`;

const addNewTodoList = item.map(todoNewItem).join("");

refs.todoList.innerHTML = "";
refs.todoList.insertAdjacentHTML("beforeend", addNewTodoList);

const clickDeleteToDoList = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if (
    !confirm(
      `Действительно удалить "${e.target.previousElementSibling.textContent}" ??`
    )
  ) {
    return;
  }

  item = item.filter((x) => x.id !== Number(e.target.parentNode.dataset.id));

  refs.todoList.innerHTML = "";
  refs.todoList.insertAdjacentHTML("beforeend", item.map(todoNewItem).join(""));

  console.log(e.target.previousElementSibling.textContent);
};
refs.todoList.addEventListener("click", clickDeleteToDoList);

const addNewItem = (e) => {
  e.preventDefault();

  if (refs.inputAddItem.value.trim().length === 0) {
    return;
  }

  item.push({
    id: (idItem += 1),
    text: refs.inputAddItem.value,
    isDone: false,
  });
  refs.todoList.innerHTML = "";
  refs.todoList.insertAdjacentHTML("beforeend", item.map(todoNewItem).join(""));
  refs.inputAddItem.value = "";
};

refs.btnAdd.addEventListener("click", addNewItem);
refs.inputAddItem.addEventListener("input", () => {});
