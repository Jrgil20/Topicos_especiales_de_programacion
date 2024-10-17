// Tipos de datos básicos en TypeScript

// Boolean
let isDone: boolean = false;
console.log(`El valor de isDone es: ${isDone}`);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(`Valores numéricos: decimal=${decimal}, hex=${hex}, binary=${binary}, octal=${octal}`);

// String
let color: string = "blue";
color = 'red';
console.log(`El color es: ${color}`);

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
console.log(`Listas de números: ${list} y ${list2}`);

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
console.log(`Tupla: ${x[0]} y ${x[1]}`);

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(`El color es: ${Color[c]}`);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(`El valor de notSure es: ${notSure}`);

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(`Valores undefined y null: ${u}, ${n}`);

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK