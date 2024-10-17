// Fibonacci using basic iteration
function basicFibonacci(): () => number {
    let a = 0, b = 1;
    return function() {
        const next = a + b;
        a = b;
        b = next;
        return a;
    };
}

const nextFibBasic = basicFibonacci();
console.log(nextFibBasic()); // 1
console.log(nextFibBasic()); // 1
console.log(nextFibBasic()); // 2
console.log(nextFibBasic()); // 3
console.log(nextFibBasic()); // 5

// Fibonacci using closure
function closureFibonacci(): () => number {
    let a = 0, b = 1;
    return function() {
        const next = a + b;
        a = b;
        b = next;
        return a;
    };
}

const nextFibClosure = closureFibonacci();
console.log(nextFibClosure()); // 1
console.log(nextFibClosure()); // 1
console.log(nextFibClosure()); // 2
console.log(nextFibClosure()); // 3
console.log(nextFibClosure()); // 5

// Fibonacci using generator
function* generatorFibonacci() {
    let a = 0, b = 1;
    while (true) {
        const next = a + b;
        a = b;
        b = next;
        yield a;
    }
}

const fibGen = generatorFibonacci();
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5