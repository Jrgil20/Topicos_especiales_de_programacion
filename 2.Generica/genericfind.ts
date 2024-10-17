function genericFind<T>(list: T[], value: T): boolean {
    return list.includes(value);
}

// Caso 1: Lista de números (inferencia de tipos)
const numberList: number[] = [1, 2, 3, 4, 5];
const numberToFind: number = 3;
const isNumberFound: boolean = genericFind(numberList, numberToFind);
console.log(`Número encontrado: ${isNumberFound}`); // Output: Número encontrado: true

// Caso 1.1: Lista de números con especificacion explicita
const isNumberFound1: boolean = genericFind<number>(numberList, numberToFind);
console.log(`Número encontrado: ${isNumberFound}`); // Output: Número encontrado: true


// Caso 2: Lista de strings
const stringList: string[] = ["apple", "banana", "cherry"];
const stringToFind: string = "banana";
const isStringFound: boolean = genericFind(stringList, stringToFind);
console.log(`String encontrado: ${isStringFound}`); // Output: String encontrado: true

// Caso 3: Lista de objetos
interface Person {
    name: string;
    age: number;
}

const personList: Person[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 22 }
];

const personToFind: Person = { name: "Jane", age: 30 };
const isPersonFound: boolean = genericFind(personList, personToFind);
console.log(`Persona encontrada: ${isPersonFound}`); // Output: Persona encontrada: true