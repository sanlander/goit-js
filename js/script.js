const personal = 5;
const minSalary = 1000;
const maxSalary = 5500;
let totalSalary = 0;

for (let i = 1; i <= personal; i += 1) {
    let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

    console.log(`З/П сотрудника ${i}: ${salary}`);

    totalSalary += salary;
    console.log(`Итого зп: ${totalSalary}`);
}

console.log(`Общая з/п всех ${personal} сотрудников составляет: ${totalSalary} USD`); 
