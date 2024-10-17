// Stack.ts
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// Par.ts
class Par<T, U> {
    constructor(public first: T, public second: U) {}
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1

const par = new Par<string, number>('hello', 42);
console.log(par.first);  // Output: hello
console.log(par.second); // Output: 42