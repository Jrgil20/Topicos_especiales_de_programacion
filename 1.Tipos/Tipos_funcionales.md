# Guía Rápida de Tipos Funcionales en TypeScript

## Introducción
TypeScript es un lenguaje de programación que extiende JavaScript añadiendo tipos estáticos. Los tipos funcionales son una característica poderosa que permite definir funciones con tipos específicos para sus parámetros y valores de retorno.


## Tipos Funcionales y Subtipos

### Tipos Funcionales
Los tipos funcionales en TypeScript permiten definir funciones con tipos específicos para sus parámetros y valores de retorno. Esto ayuda a garantizar que las funciones se utilicen correctamente y que los tipos de datos sean consistentes en todo el código.

#### Ejemplo de Tipo Funcional
```typescript
type Operacion = (a: number, b: number) => number;

const dividir: Operacion = (a, b) => a / b;
```

### Subtipos
Un subtipo es un tipo que es una versión más específica de otro tipo. En TypeScript, los subtipos se utilizan para crear jerarquías de tipos que permiten una mayor flexibilidad y reutilización de código.

#### Ejemplo de Subtipo
```typescript
interface Animal {
    nombre: string;
    edad: number;
}

interface Perro extends Animal {
    raza: string;
}

const miPerro: Perro = {
    nombre: "Firulais",
    edad: 5,
    raza: "Labrador"
};
```

### Ventajas de los Tipos Funcionales y Subtipos
- **Claridad**: Facilitan la comprensión del código al hacer explícitos los tipos de datos y las relaciones entre ellos.
- **Reutilización**: Permiten reutilizar tipos y funciones en diferentes partes del código.
- **Mantenimiento**: Hacen que el código sea más fácil de mantener y refactorizar al proporcionar una estructura clara y consistente.



## Funciones Básicas

### Declaración de Funciones
```typescript
function suma(a: number, b: number): number {
    return a + b;
}
```

### Funciones Anónimas
```typescript
const resta = (a: number, b: number): number => {
    return a - b;
}
```

## Tipos de Funciones

### Funciones con Parámetros Opcionales
```typescript
function saludar(nombre: string, saludo?: string): string {
    return saludo ? `${saludo}, ${nombre}` : `Hola, ${nombre}`;
}
```

### Funciones con Parámetros Predeterminados
```typescript
function potencia(base: number, exponente: number = 2): number {
    return Math.pow(base, exponente);
}
```

### Funciones con Parámetros Rest
```typescript
function sumarTodo(...numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
}
```

## Tipos de Retorno

### Funciones que Retornan `void`
```typescript
function logMensaje(mensaje: string): void {
    console.log(mensaje);
}
```

### Funciones que Retornan `never`
```typescript
function error(mensaje: string): never {
    throw new Error(mensaje);
}
```

## Tipos de Funciones Avanzados

### Funciones como Tipos
```typescript
type Operacion = (a: number, b: number) => number;

const multiplicar: Operacion = (a, b) => a * b;
```

### Funciones Genéricas
```typescript
function identidad<T>(valor: T): T {
    return valor;
}
```


## Funciones de Clase Superior

Las funciones de clase superior (o funciones de orden superior) son funciones que pueden tomar otras funciones como argumentos o devolverlas como resultados. Este concepto es fundamental en la programación funcional y permite escribir código más modular y reutilizable.

### Funciones que Aceptan Otras Funciones

Una función de clase superior puede aceptar una o más funciones como parámetros. Esto es útil para crear funciones genéricas que pueden aplicar diferentes operaciones.

#### Ejemplo de Función de Clase Superior
```typescript
function aplicarOperacion(a: number, b: number, operacion: (x: number, y: number) => number): number {
    return operacion(a, b);
}

const suma = (x: number, y: number) => x + y;
const resultado = aplicarOperacion(5, 3, suma); // Resultado: 8
```

### Funciones que Devuelven Otras Funciones

Una función de clase superior también puede devolver una función como resultado. Esto permite crear funciones más flexibles y configurables.

#### Ejemplo de Función que Devuelve Otra Función
```typescript
function crearMultiplicador(factor: number): (x: number) => number {
    return (x: number) => x * factor;
}

const duplicar = crearMultiplicador(2);
const resultado = duplicar(5); // Resultado: 10
```

### Ventajas de las Funciones de Clase Superior
- **Modularidad**: Permiten dividir el código en funciones más pequeñas y reutilizables.
- **Flexibilidad**: Facilitan la creación de funciones genéricas que pueden adaptarse a diferentes necesidades.
- **Composición**: Hacen posible la composición de funciones, lo que puede simplificar la lógica del programa.


## Conclusión
Los tipos funcionales en TypeScript permiten escribir código más seguro y predecible. Aprovechar estas características puede mejorar significativamente la calidad de tu código.