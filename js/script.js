const totalSpent = 800;
let payment = 50888;
let discount;
let pay = payment - payment * discount;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
  console.log(`Оформляем зкаказ на сумму ${payment} грн. со скидкой ${discount * 100}%`);
  console.log(`Итого к оплате: ${pay} грн.`);
  console.log(`Сумма скидки: ${(payment - (payment - payment * discount)).toFixed(2)} грн.`);
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
  console.log(`Оформляем зкаказ на сумму ${payment} грн. со скидкой ${discount * 100}%`);
  console.log(`Итого к оплате: ${payment - payment * discount} грн.`);
  console.log(`Сумма скидки: ${payment -= payment * discount} грн.`);
} else if (totalSpent >= 5000) {
  discount = 0.1;
  console.log(`Оформляем зкаказ на сумму ${payment} грн. со скидкой ${discount * 100}%`);
  console.log(`Итого к оплате: ${(payment -= payment * discount)} грн.`);
  console.log(`Сумма скидки: ${Math.round(payment -= payment * discount)} грн.`);
} else {
  console.log(`Оформляем зкаказ на сумму ${payment} грн. со скидкой ${discount * 100}%`);
}
