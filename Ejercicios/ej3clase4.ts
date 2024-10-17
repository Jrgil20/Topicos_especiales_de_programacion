function comparar<T, U>(a: T, b: U): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

// Ejemplos de uso
const resultado1 = comparar(10, 10); // Salida: true
const resultado2 = comparar("Hola", "Mundo"); // Salida: false
const resultado3 = comparar({ nombre: "Juan" }, { nombre: "Juan" }); // Salida: true

console.log(resultado1); // true
console.log(resultado2); // false
console.log(resultado3); // true