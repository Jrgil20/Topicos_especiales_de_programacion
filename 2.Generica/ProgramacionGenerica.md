# Programación Genérica: Guía Rápida

## Introducción
La programación genérica es un paradigma de programación que permite escribir código más flexible y reutilizable. Abstrae el tipo de datos con los que se trabaja. La programación genérica permite escribir código que puede funcionar con cualquier tipo de dato. Esto se logra mediante el uso de **plantillas** (templates) en lenguajes como C++ y **genéricos** (generics) en lenguajes como Java y C#.

## Conceptos Clave
La programación genérica se basa en el uso de **parámetros de tipo**. Estos parámetros representan los tipos de datos con los que trabajará el código genérico. El compilador o intérprete del lenguaje de programación se encarga de generar el código específico para los tipos de datos utilizados en cada instancia del código genérico.


## Ventajas
- **Reutilización de código**: Escribir funciones y clases que pueden trabajar con cualquier tipo de dato.
- **Seguridad de tipos**: Detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.
- **Rendimiento**: Evitar el uso de tipos genéricos en tiempo de ejecución, lo que puede mejorar el rendimiento.


## Ejemplo en TypeScript

A continuación, se muestra un ejemplo de cómo funciona la programación genérica en TypeScript. En este ejemplo, se define una función genérica que puede trabajar con cualquier tipo de dato:

```typescript
// Definición de una función genérica
function identity<T>(arg: T): T {
    return arg;
}

// Uso de la función genérica con diferentes tipos de datos
let output1 = identity<string>("Hola Mundo");
let output2 = identity<number>(42);

console.log(output1); // Salida: Hola Mundo
console.log(output2); // Salida: 42
```

En este ejemplo, la función `identity` toma un parámetro de tipo `T` y devuelve un valor del mismo tipo `T`. Al llamar a la función, se especifica el tipo de dato que se utilizará, lo que permite que la función trabaje con diferentes tipos de datos sin necesidad de duplicar el código.



## Conclusión
La programación genérica es una poderosa herramienta que permite escribir código más flexible y reutilizable. Al dominar esta técnica, los desarrolladores pueden crear aplicaciones más robustas y eficientes.
