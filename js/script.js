<<<<<<< Updated upstream
let valueResult = 0;

const refs = {
  resultString: document.querySelector(".result-string"),
  btnDivide: document.querySelector(".divide"),
  btnMultiply: document.querySelector(".multiply"),
  btnPlus: document.querySelector(".plus"),
  btnMinus: document.querySelector(".minus"),
  inputNumber: document.querySelector(".input-number"),
  btnRemove: document.querySelector(".remove"),
  btnResult: document.querySelector(".result"),
};
const lastSymbol = "";
console.log(lastSymbol);
let inputValue = "";
refs.inputNumber.addEventListener("input", () => {
  inputValue = Number(refs.inputNumber.value);
});

/*Плюс*/
const onPlus = () => {
  valueResult += inputValue;
  refs.resultString.insertAdjacentHTML("beforeend", `${inputValue}+`);

  refs.inputNumber.value = "";
};
refs.btnPlus.addEventListener("click", onPlus);
/* Минус */
const onMinus = () => {
  if (refs.resultString.textContent === "") {
    valueResult = inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  } else if (refs.resultString.textContent[refs.resultString.textContent.length - 1] === "+") {
    valueResult += inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  } else {
    valueResult -= inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value}-`
    );
    refs.inputNumber.value = "";
  }
};
refs.btnMinus.addEventListener("click", onMinus);

/*Равно*/
refs.btnResult.addEventListener("click", () => {
  if (
    refs.resultString.textContent[refs.resultString.textContent.length - 1] ===
    "-"
  ) {
    valueResult -= inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value} = ${valueResult}`
    );
    refs.inputNumber.value = "";
    valueResult = 0;
  } else if (
    refs.resultString.textContent[refs.resultString.textContent.length - 1] ===
    "+"
  ) {
    valueResult += inputValue;
    refs.resultString.insertAdjacentHTML(
      "beforeend",
      `${refs.inputNumber.value} = ${valueResult}`
    );
    refs.inputNumber.value = "";
    valueResult = 0;
  } else {
    return;
  }
});

refs.btnRemove.addEventListener("click", () => {
  refs.inputNumber.value = "";
  refs.resultString.innerHTML = "";
  valueResult = 0;
});
=======
class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter(x => x.text !== text);
  }

  updateNote(text, newPriority) {
    this.items = this.items.map(x => (x.text === text ? {
      ...x,
      x.priority = newPriority,
     } : x ));
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });

console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);
myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.NORMAL);
console.log(myNotes.items);
>>>>>>> Stashed changes
