/*Робота з Typescript: Enums і Union
Створіть enum Day, який буде містити дні тижня.
Створіть функцію getActivit, яка приймає день тижня як аргумент (з використанням вашого enum) 
та повертає рекомендовану активність для цього дня (наприклад, "Відпочинок" для неділі).*/

enum Days {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const getActivity = (weekDays: Days): string => {
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

class Queue<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

let queue1 = new Queue<string>();
queue1.enqueue("b");
queue1.enqueue("c");
queue1.enqueue("d");
queue1.enqueue("e");
console.log(queue1);
queue1.dequeue();
console.log(queue1);

let queue2 = new Queue<number>();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(2);
queue2.enqueue(4);
queue2.enqueue(6);
console.log(queue2);
queue2.dequeue();
queue2.dequeue();
console.log(queue2);

/*Розширені можливості інтерфейсів
Створіть інтерфейс IPerson з полями name та age.
Розширте цей інтерфейс новим інтерфейсом IWorker, додавши поля position (посада) та salary (зарплата).
Створіть клас Worker, який реалізує IWorker, та додайте методи для отримання та зміни зарплати.*/

interface IPerson {
  name: string;
  age: number;
}

interface IWorker extends IPerson {
  position: string;
  salary: number;
  getSalary(): number;
  incomeSalary(income: number): number;
  withdrawSalary(withdraw: number): number;
}

class Worker1 implements IWorker {
  name: string;
  age: number;
  position: string;
  salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  incomeSalary(income: number): number {
    if (income > 0) {
      this.salary += income;
      return this.salary;
    } else {
      throw new Error("Income cannot be negative");
    }
  }

  withdrawSalary(withdraw: number): number {
    if (withdraw <= 0) {
      throw new Error("Withdraw amount should be more than 0");
    }

    if (withdraw > this.salary) {
      throw new Error("Insufficient funds");
    }

    this.salary -= withdraw;
    return this.salary;
  }
}

let User: Worker1 = new Worker1("Mike", 35, "photo", 25);
console.log(User);
console.log(User.getSalary());
console.log(User.incomeSalary(89));
console.log(User.withdrawSalary(56));

/*Type Aliases та Literal Types
Створіть type alias StringOrNumber, який буде або рядком, або числом.
Створіть функцію combine(input1: StringOrNumber, input2: StringOrNumber),яка буде комбінувати два значення 
(якщо обидва рядки - конкатенує їх, якщо числа - додавати, в інших випадках видає помилку).*/

type StringOrNumber = string | number;

function combine(
  input1: StringOrNumber,
  input2: StringOrNumber
): string | number | Error {
  let result: string | number;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1 + input2;
  } else {
    throw new Error("Input types must match");
  }

  return result;
}

console.log(combine("k", "k"));
console.log(combine(6, 9));
console.log(combine("6", 5));
