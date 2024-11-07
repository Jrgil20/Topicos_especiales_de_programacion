function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
    if (array1.length !== array2.length) {
        throw new Error("Both arrays must have the same length");
    }

    const result: [T, U][] = [];
    for (let i = 0; i < array1.length; i++) {
        result.push([array1[i], array2[i]]);
    }

    return result;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const zippedArray = zip(array1, array2);
console.log(zippedArray); // Output: [[1, 'a'], [2, 'b'], [3, 'c']]