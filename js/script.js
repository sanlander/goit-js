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

// function printContactsInfo(names, phones) {
//     const arrNames = names.split(',');
//     const arrPhones = phones.split(',');

//     let maxLengthName = 0;
//     for (const iterator of arrNames) {
//         if (iterator.length > maxLengthName) {
//             maxLengthName = iterator.length;
//         }
//     }
//     for (let i = 0; i < arrNames.length; i += 1) {
//         console.log(
//           `${arrNames[i].padEnd(maxLengthName+1, "-")}: ${arrPhones[i]}`
//         );
//     }
// }

// printContactsInfo(
//   'Jacob,William,S222222olomon,Artemis,A123456789A',
//   '89001234567,89001112233,890055566377,890055566300,380674552288'
// );

// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//     let maxNumber = numbers[0];
//     for (const iterator of numbers) {
//         if (iterator > maxNumber) {
//             maxNumber = iterator;
//         }
//     }

//     return maxNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//     let calSum = 0;
//     const calTotal = arguments.length;

//     for (const iterator of arguments) {
//         calSum += iterator;
//     }
//     return (calSum / calTotal).toFixed(2);
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(minutes) {
//     let timeMinute = String(minutes % 60).padStart(2, 0);
//     let timeHours = String(Math.floor(minutes / 60)).padStart(2, 0);

//     return `${timeHours}:${timeMinute}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Express"];

// function removeCourse(name) {

//   courses.includes(name)
//     ? courses.splice(courses.indexOf(name), 1)
//     : console.log("Курс с таким имененем не найден");
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Express"];

// function updateCourse(oldName, newName) {

//     courses.includes(oldName)
//       ? courses.splice(courses.indexOf(oldName), 1, newName)
//       : courses.push(oldName, newName);
// }

// updateCourse('Express2', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// function findLongestWord(text) {
//     const arrWords = text.split(' ');
//     let maxLengthWord = arrWords[0];
//     // console.log(arrWords);
//     // console.log(maxLengthWord);

//     for (const iterator of arrWords) {
//         iterator.length > maxLengthWord.length
//             ? maxLengthWord = iterator
//             : '';
//     }
//     return maxLengthWord;
// }

// console.log(
//   findLongestWord("I done it. But i can't understand how it works understand2")
// );

// const arr1 = [1, 2, 3, 4, 5, 6, 675];
// const arr2 = [34, 54, 1, 456, 3, 675, 234, 87, 6];

// function matchNumber(mass1, mass2) {
//   const matchNumbers = [];
//   for (const iterator of mass1) {
//     mass2.includes(iterator) ? matchNumbers.push(iterator) : "";
//   }
//   return matchNumbers;
// }

// console.log(matchNumber(arr1, arr2));

// const arr1 = [6, 1, 2, 3, 2, 4, 5, 1, 6, 2, 1, 8, 8, 2, 6, 8, 1]; // [1, 2]
// const matchNumbers = [];

// for (let i = 0; i < arr1.length; i += 1) {
//     for (let x = i + 1; x < arr1.length; x += 1) {
//          if (arr1[i] === arr1[x] && !matchNumbers.includes(arr1[i])) {
//             matchNumbers.push(arr1[i]);

//         }
//     }
// }
// console.log(matchNumbers);

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// function allFriends(friends) {
//   const listFriendsOnline = [];
//     for (const friend of friends) {
//         if (!friend.online) {
//             listFriendsOnline.push(friend)
//         }
//     }
//     return listFriendsOnline;
// }
// console.log(allFriends(friends));

// function allFriends(friends) {
//     const listFriends = {
//         online: [],
//         offline: [],
//     };

//   for (const friend of friends) {
//       if (friend.online) {
//           listFriends.online.push(friend);
//       } else {
//           listFriends.offline.push(friend);
//       }
//   }
//   return listFriends;
// }
// console.table(allFriends(friends));

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// let total = Object.keys(x);

// console.log(total.length);
const playlist = {
  name: 'Мой плейлист!',
  reyting: 3,
  tracs: ['Трек-1', 'Трек-2', 'Трек-3'],
  author: 'Моцарт',
};

let { name, reyting, tracs, author = 'Не определен' } = playlist;

reyting = 5;
console.log(reyting);
