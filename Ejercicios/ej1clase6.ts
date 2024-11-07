function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

async function transformNumber(N: number): Promise<number> {
    const digits = N.toString().split('').map(Number);
    let X = 0;

    if (digits.length < 9) {
        for (let digit of digits) {
            let residue = digit % 3;
            if (residue < 2) {
                X = X * 10 + (digit + 1);
            } else {
                X = X * 10 + (digit + 4);
            }
        }
    } else {
        const maxEvenDigit = Math.max(...digits.filter(d => d % 2 === 0));
        for (let digit of digits) {
            if (isPrime(digit)) {
                X = X * 10 + maxEvenDigit;
            } else {
                X = X * 10 + digit;
            }
        }
    }

    return X;
}

async function main() {
    const N = 789324; // Example input
    const X = await transformNumber(N);
    console.log(`Salida: X = ${X}`);
}

main();