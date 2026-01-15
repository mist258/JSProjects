/*Робота з Typescript: Enums і Union
Створіть enum Day, який буде містити дні тижня.
Створіть функцію getActivit, яка приймає день тижня як аргумент (з використанням вашого enum)
та повертає рекомендовану активність для цього дня (наприклад, "Відпочинок" для неділі).*/
var Days;
(function (Days) {
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
    Days["Wednesday"] = "Wednesday";
    Days["Thursday"] = "Thursday";
    Days["Friday"] = "Friday";
    Days["Saturday"] = "Saturday";
    Days["Sunday"] = "Sunday";
})(Days || (Days = {}));
var getActivity = function (weekDays) {
    switch (weekDays) {
        case Days.Monday:
            return "Planing the next week";
        case Days.Tuesday:
            return "Have a shopping";
        case Days.Wednesday:
            return "Rest in the mid of week";
        case Days.Thursday:
            return "To walk the dog";
        case Days.Friday:
            return "Pick up the parcels from the post office";
        case Days.Saturday:
            return "Do some cleaning";
        case Days.Sunday:
            return "Going to the cinema";
        default:
            return "Something has gone wrong";
    }
};
console.log(getActivity(Days.Thursday));
/*Дженерики
Створіть клас Queue<T>, який буде мати два методи: enqueue(item: T) для додавання елементів та dequeue(): T для їх видалення.
Перевірте цей клас, створивши черги з рядків та чисел.*/
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    return Queue;
}());
var queue1 = new Queue();
queue1.enqueue("b");
queue1.enqueue("c");
queue1.enqueue("d");
queue1.enqueue("e");
console.log(queue1);
queue1.dequeue();
console.log(queue1);
var queue2 = new Queue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(2);
queue2.enqueue(4);
queue2.enqueue(6);
console.log(queue2);
queue2.dequeue();
queue2.dequeue();
console.log(queue2);
var Worker1 = /** @class */ (function () {
    function Worker1(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    Worker1.prototype.getSalary = function () {
        return this.salary;
    };
    Worker1.prototype.incomeSalary = function (income) {
        if (income > 0) {
            this.salary += income;
            return this.salary;
        }
        else {
            throw new Error("Income cannot be negative");
        }
    };
    Worker1.prototype.withdrawSalary = function (withdraw) {
        if (withdraw <= 0) {
            throw new Error("Withdraw amount should be more than 0");
        }
        if (withdraw > this.salary) {
            throw new Error("Insufficient funds");
        }
        this.salary -= withdraw;
        return this.salary;
    };
    return Worker1;
}());
var User = new Worker1("Mike", 35, "photo", 25);
console.log(User);
console.log(User.getSalary());
console.log(User.incomeSalary(89));
console.log(User.withdrawSalary(56));
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1 + input2;
    }
    else {
        throw new Error("Input types must match");
    }
    return result;
}
console.log(combine("k", "k"));
console.log(combine(6, 9));
console.log(combine("6", 5));
