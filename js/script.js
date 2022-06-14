let totalSalary = 0;
let employees = 2;

for (let i = 1; i <= employees; i += 1) {
    let salary = Math.round(Math.random() * (5000 - 500) + 500);
   
    console.log(`ЗП сотрудникаа ${i} - ${salary}`);

    totalSalary += salary;
    
}


console.log('totalSalary:', totalSalary);
