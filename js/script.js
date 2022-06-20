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
