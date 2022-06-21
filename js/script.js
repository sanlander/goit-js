<<<<<<< Updated upstream
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

const totalMinutes = 80;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);
console.log('Time:', `${String(hours).padStart(2, '0')}:${minutes}`);
// const hours2 = String(hours).padStart(2, '0');
// console.log(hours2);
=======
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - (2 * 5);
// console.log(result);
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.3;
// console.log("value = ", Math.round(value));

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `Cyberdyne Systems has ${
//   repairBots + defenceBots
// } bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

let weight = '88,3';
let height = '1.75';
weight = Number(weight.replace(',', '.'));
height = Number(height.replace(",", "."));


console.log(weight);
console.log(height);

const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
console.log(bmi); // 28.8
>>>>>>> Stashed changes
