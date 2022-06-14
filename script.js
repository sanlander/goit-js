let base = prompt('Введите число');
base = Number(base);

let baseNew = prompt('Введите степень');
baseNew = Number(baseNew);

let result = Math.pow(base, baseNew);

console.log('Результат вычисления:', result);