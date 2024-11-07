### Tuplas en TypeScript

Una tupla es un tipo especial de array que permite definir el tipo de datos de cada elemento en una posición específica. A diferencia de los arrays normales, donde todos los elementos son del mismo tipo, las tuplas permiten mezclar tipos de datos.

### Código Explicado

```typescript
// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
console.log(`Tupla: ${x[0]} y ${x[1]}`);
```   

1. **Declaración de la Tupla**:
    ```typescript
    let x: [string, number];
    ```
    Aquí estamos declarando una variable [`x`]que es una tupla. Esta tupla debe contener exactamente dos elementos: el primero debe ser un [`string`] y el segundo un [`number`].

2. **Asignación de Valores**:
    ```typescript
    x = ["hello", 10]; // OK
    ```
    Asignamos un array con dos elementos a [`x`]. El primer elemento es un [`string`] ("hello") y el segundo es un [`number`] (10). Esto es válido porque coincide con la definición de la tupla.

3. **Uso de la Tupla**:
    ```typescript
    console.log(`Tupla: ${x[0]} y ${x[1]}`);
    ```
    Aquí estamos utilizando la tupla [`x`] para imprimir sus valores. Usamos la sintaxis de template strings de JavaScript/TypeScript para insertar los valores de [`x[0]`] y [`x[1]`] en la cadena de texto. [`x[0]`] es "hello" y [`x[1]`] es 10, por lo que la salida será:
    ```
    Tupla: hello y 10
    ```

### Resumen

Las tuplas en TypeScript permiten definir arrays con un número fijo de elementos donde cada elemento puede tener un tipo diferente. Esto es útil cuando se necesita trabajar con estructuras de datos heterogéneas y se quiere asegurar que cada posición en la tupla tenga el tipo de dato correcto.