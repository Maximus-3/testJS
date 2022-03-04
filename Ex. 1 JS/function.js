let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money, time);

let answer1 = prompt("Введите обязательную статью расходов в этом месяце");

let answer2 = prompt("Во сколько обойдется?");

console.log(answer1, answer2);

let expenses = {
    answer1: answer2
};

let optionalExpenses = {

};

let income = [];

let appData = {
    moneyData: money,
    timeData: time,
    expensesData: expenses,
    optionalExpensesData: optionalExpenses,
    incomeData: income,
    saving: false
};

alert("Бюджет на 1 день - " + money/30);
console.log(appData);


