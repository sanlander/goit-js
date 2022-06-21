// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// ================== if ... else =========================
let userLogin = String(prompt("Введите свой логин")).toLocaleLowerCase();
let userPasswordBd = 555;
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
switch (userLogin) {
    case "Админ".toLocaleLowerCase():
        let usdPassword = Number(prompt("Введите пароль"));
        console.log(usdPassword === userPasswordBd ? "Здравствуйте!" : "Неверный пароль");
        break;
    case '':
    case 'null':
        console.log("Отменено");
        break;
    default:
        console.log("Я вас не знаю");
}