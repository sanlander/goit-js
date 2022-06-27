// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// ================== if ... else =========================
// let userLogin = String(prompt("Введите свой логин")).toLocaleLowerCase();
// let userPasswordBd = 555;
// console.log(userLogin);

// if (userLogin === "Админ".toLocaleLowerCase()) {
//   let userPassword = Number(prompt("Введите пароль"));
//   if (userPassword === userPasswordBd) {
//     console.log("Здравствуйте!");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (userLogin === "" || userLogin === "null") {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }
// ================== switch ... case =========================
// switch (userLogin) {
//     case "Админ".toLocaleLowerCase():
//         let usdPassword = Number(prompt("Введите пароль"));
//         console.log(usdPassword === userPasswordBd ? "Здравствуйте!" : "Неверный пароль");
//         break;
//     case '':
//     case 'null':
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

// function includes(array, value) {
// Change code below this line
//     let message = false;
//   for (const number of array) {
//       if (number === value) {
//           message = true;
//           break;
//       }
//     }
//     return message;
// Change code above this line
// }

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// let langsOrig = ["python", "javascript", "c++", "haskel", "php", "ruby"];
// // console.log(langsOrig);

// let arrOneSymbol = [];

// let sortMinLangs = [];

// for (let i = 0; i < langsOrig.length; i += 1) {
//   arrOneSymbol.push(langsOrig[i].charCodeAt());
// //   console.log(`${langsOrig[i].padEnd(12, "_")}: ${arrOneSymbol[i]}`);
// }
// // console.log(arrOneSymbol);
// let langs = langsOrig.slice(0);
// // console.log(langs);

// // console.log("1 итерация");

// // console.log(Math.min(...arrOneSymbol));

// for (let i = 0; i < langsOrig.length; i += 1) {
// //   console.log(arrOneSymbol[i]);
//   if (arrOneSymbol[i] === Math.min(...arrOneSymbol)) {
//     //   Вставляем по мин индексу в нов массив
//     sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
//     //   Удаляем мин значение из старого массива
//     langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
//     arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
//   }
//   //   Вставляем по мин индексу в нов массив
//   sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
//   //   Удаляем мин значение из старого массива
//   langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
//   arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// }
// console.log(sortMinLangs);

// console.log("Оригиральный массив: ", langs);
// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// console.log("2 итерация");
// // Вставляем по мин индексу в нов массив
// sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
// // Удаляем мин значение из старого массива
// langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);

// console.log("Оригиральный массив: ", langs);
// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// console.log("3 итерация");
// // Вставляем по мин индексу в нов массив
// sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
// // Удаляем мин значение из старого массива
// langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);

// console.log("Оригиральный массив: ", langs);
// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// console.log("4 итерация");
// // Вставляем по мин индексу в нов массив
// sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
// // Удаляем мин значение из старого массива
// langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);

// console.log("Оригиральный массив: ", langs);
// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// //========= 5 итерация =========
// // Вставляем по мин индексу в нов массив
// sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
// // Удаляем мин значение из старого массива
// langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);

// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// //========= 6 итерация =========
// // Вставляем по мин индексу в нов массив
// sortMinLangs.push(langs[arrOneSymbol.indexOf(Math.min(...arrOneSymbol))]);
// // Удаляем мин значение из старого массива
// langs.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);
// arrOneSymbol.splice(arrOneSymbol.indexOf(Math.min(...arrOneSymbol)), 1);

// console.log("Старый массив: ", arrOneSymbol);
// console.log("Новый массив: ", sortMinLangs);

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// for (let i = 0; i < langs.length; i += 1) {
//     // console.log(langs[i]);

//     for (let y = i + 1; y < langs.length; y += 1) {
//         // console.log(`${langs[i]} vs ${langs[y]} `);
//         const lang1 = langs[i];
//         const lang2 = langs[y];

//         if (lang1[0] > lang2[0]) {
//             langs[i] = lang2;
//             langs[y] = lang1;
//         }
//     }
// }
// console.log(langs);

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, -17, 94, 1, 23, 37, 0];
// let min = Number(numbers[0]);

// for (const iterator of numbers) {
//     if (iterator < min) {
//         min = iterator;
//     }
// }
// console.log(min); // 1

// let num = 7;
// const result = [];
// // function summRange(num) {
// for (let i = 1; i < num; i += 1) {
//     result.push(i);
// }
// // }
// console.log(result.join('+'));
// // 1 .. num

// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// function calcBMI(weight, height) {
//     const w = Number(weight.replace(',', '.'));
//     const h2 = Math.pow(Number(height.replace(',', '.')), 2);
//     return (w / h2).toFixed(1);
// }

// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(...rest) {
//   let result = rest[0];
//     for (const iterator of rest) {
        
//     if (iterator < result) {
//       result = iterator;
//     }
//   }
//   return result;
// }


// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1, 0, -50, 5, -99, 5)); // 1

// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//     const [a, b] = dimensions.split(' ');
    
//     return a * b;
// }

// console.log(getRectArea('8 10'));

// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
    
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

function printContactsInfo(names, phones) {
    const arrNames = names.split(',');
    const arrPhones = phones.split(',');
    for (let i = 0; i < arrNames.length; i += 1) {
        console.log(`${arrNames[i].padEnd(8, ' ')}: ${arrPhones[i]}`);
    }
}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);