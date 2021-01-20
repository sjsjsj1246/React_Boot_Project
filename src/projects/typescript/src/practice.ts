let count = 0;
count += 1;

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

messages.push('asd');

let mightBeUnderfined: string | undefined = undefined;
let nummableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
//color='green' error

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
  console.log('I am just saying hello world');
}

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

const a: string = 'acb';

// interface Person {
//   name: string;
//   age?: number;
// }
// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: '김사람',
//   age: 20
// }

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// }

// const perple: Person[] = [person, expert]

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람',
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react'],
};
type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors2: Color[] = ['red', 'orange'];

//제너릭
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

function wrap<T>(param: T) {
  return {
    param,
  };
}

//interface with Generics
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

//class with Generics
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
