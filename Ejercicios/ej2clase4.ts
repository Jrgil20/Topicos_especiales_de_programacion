// Basic Box class to encapsulate any value
class Box {
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    getValue(): any {
        return this.value;
    }

    setValue(value: any): void {
        this.value = value;
    }
}

// Example usage
const numberBox = new Box(123);
console.log(numberBox.getValue()); // 123

const stringBox = new Box("Hello, World!");
console.log(stringBox.getValue()); // Hello, World!

const objectBox = new Box({ key: "value" });
console.log(objectBox.getValue()); // { key: "value" }

// Generic Box class to encapsulate a value of type T
class BoxGeneric<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

// Example usage with generic Box
const numberBoxGeneric = new BoxGeneric<number>(123);
console.log(numberBoxGeneric.getValue()); // 123

const stringBoxGeneric = new BoxGeneric<string>("Hello, World!");
console.log(stringBoxGeneric.getValue()); // Hello, World!

const objectBoxGeneric = new BoxGeneric<{ key: string }>({ key: "value" });
console.log(objectBoxGeneric.getValue()); // { key: "value" }