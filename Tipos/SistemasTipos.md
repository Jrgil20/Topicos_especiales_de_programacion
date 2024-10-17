# Sistemas de Tipos

Un sistema de tipos es un marco que define cómo se asignan y verifican los tipos en un lenguaje de programación. Los sistemas de tipos ayudan a prevenir errores al garantizar que las operaciones realizadas en los datos sean válidas según sus tipos. Existen varios enfoques para implementar sistemas de tipos, cada uno con sus propias ventajas y desventajas.

Los sistemas de tipos son verificados mediante un proceso conocido como "verificación de tipos". Este proceso puede ser realizado en tiempo de compilación o en tiempo de ejecución, dependiendo del lenguaje de programación y su implementación del sistema de tipos. 


## Tipos Nominales
En un sistema de tipos nominal, la compatibilidad y equivalencia de tipos se determina por nombres explícitos y declaraciones. Esto significa que dos tipos son considerados iguales si y solo si tienen el mismo nombre. Este enfoque es común en lenguajes como Java y C#.

La verificación se basa en los nombres explícitos y declaraciones de los tipos. Dos tipos son considerados iguales si tienen el mismo nombre.

### Ventajas

1. **Claridad y Mantenimiento**: La verificación basada en nombres explícitos facilita la comprensión del código y su mantenimiento, ya que los tipos son claramente definidos y diferenciados por sus nombres.
2. **Seguridad de Tipos**: Al requerir coincidencia exacta de nombres, se reduce el riesgo de errores accidentales al asignar tipos incorrectos, mejorando la seguridad del código.
3. **Compatibilidad con Herramientas**: Los sistemas de tipos nominales suelen ser compatibles con herramientas de desarrollo que dependen de nombres de tipos, como generadores de código y analizadores estáticos.

### Desventajas

1. **Rigidez**: La estricta verificación de nombres puede ser demasiado restrictiva, impidiendo la reutilización de código cuando dos tipos tienen la misma estructura pero nombres diferentes.
2. **Sobrecarga de Código**: Puede ser necesario escribir más código para definir conversiones explícitas entre tipos que tienen la misma estructura, lo que puede aumentar la complejidad del código.
3. **Menor Flexibilidad**: Comparado con los sistemas de tipos estructurales, los sistemas de tipos nominales ofrecen menos flexibilidad al trabajar con tipos que tienen estructuras similares pero nombres diferentes.


### Ejemplo de Tipos Nominales

Consideremos dos clases en TypeScript, `Persona` y `Empleado`, ambas con la misma estructura pero con nombres diferentes:

```typescript
class Persona {
    nombre: string;
    edad: number;
}

class Empleado {
    nombre: string;
    edad: number;
}
```

En un sistema de tipos nominal, `Persona` y `Empleado` no son considerados iguales, a pesar de tener la misma estructura. Esto significa que no podemos asignar una instancia de `Empleado` a una variable de tipo `Persona` sin una conversión explícita.

```typescript
let persona: Persona = new Empleado(); // Error de tipo
```

### Contraejemplo de Tipos Nominales

Ahora, consideremos una situación menos evidente. Supongamos que tenemos una clase `Usuario` y una interfaz `Cliente` con la misma estructura:

```typescript
class Usuario {
    nombre: string;
    edad: number;
}

interface Cliente {
    nombre: string;
    edad: number;
}
```

En un sistema de tipos nominal, `Usuario` y `Cliente` no son considerados iguales, aunque tienen la misma estructura. Sin embargo, en TypeScript, que utiliza un sistema de tipos estructural, podríamos asignar una instancia de `Usuario` a una variable de tipo `Cliente` sin problemas:

```typescript
let cliente: Cliente = new Usuario(); // Válido en TypeScript
```

Este ejemplo ilustra cómo un sistema de tipos nominal sería más estricto en comparación con un sistema de tipos estructural.

## Tipos Estructurales
En un sistema de tipos estructural, la compatibilidad de tipos se basa en la estructura o forma de los tipos. Dos tipos son considerados iguales si tienen la misma estructura, es decir, los mismos miembros con los mismos tipos. TypeScript utiliza un sistema de tipos estructural, lo que permite una mayor flexibilidad y reutilización de código.

La verificación se basa en la estructura o forma de los tipos. Dos tipos son considerados iguales si tienen la misma estructura, independientemente de sus nombres.


### Ventajas

1. **Flexibilidad**: Los sistemas de tipos estructurales permiten una mayor flexibilidad al trabajar con tipos que tienen la misma estructura, independientemente de sus nombres. Esto facilita la reutilización de código y la integración de diferentes componentes.
2. **Menor Sobrecarga de Código**: Al no requerir coincidencia exacta de nombres, se reduce la necesidad de escribir conversiones explícitas entre tipos con la misma estructura, simplificando el código.
3. **Compatibilidad Implícita**: La compatibilidad de tipos basada en la estructura permite que los tipos sean compatibles de manera implícita, lo que puede hacer que el código sea más intuitivo y fácil de mantener.
4. **Interoperabilidad**: Los sistemas de tipos estructurales facilitan la interoperabilidad entre diferentes módulos y bibliotecas, ya que los tipos pueden ser compatibles siempre que tengan la misma estructura.


### Desventajas

1. **Ambigüedad**: La verificación basada en la estructura puede llevar a ambigüedades, ya que diferentes tipos con la misma estructura pueden ser considerados iguales, lo que puede resultar en errores difíciles de detectar.
2. **Menor Seguridad de Tipos**: Al no requerir coincidencia exacta de nombres, es más fácil cometer errores al asignar tipos incorrectos, lo que puede reducir la seguridad del código.
3. **Dificultad en el Mantenimiento**: La flexibilidad de los sistemas de tipos estructurales puede dificultar el mantenimiento del código, ya que es menos claro qué tipos son compatibles entre sí.
4. **Problemas de Rendimiento**: La verificación de tipos estructurales puede ser más costosa en términos de rendimiento, ya que requiere comparar la estructura completa de los tipos en lugar de simplemente sus nombres.


### Ejemplo de Tipos Estructurales

Consideremos dos interfaces en TypeScript, `Persona` y `Empleado`, ambas con la misma estructura:

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado {
    nombre: string;
    edad: number;
}
```

En un sistema de tipos estructural, `Persona` y `Empleado` son considerados iguales debido a su estructura idéntica. Esto significa que podemos asignar una instancia de `Empleado` a una variable de tipo `Persona` sin problemas:

```typescript
let persona: Persona = { nombre: "Juan", edad: 30 } as Empleado; // Válido en TypeScript
```

Este ejemplo ilustra cómo un sistema de tipos estructural permite una mayor flexibilidad y reutilización de código.



### Contraejemplo de Tipos Estructurales

Consideremos dos interfaces en TypeScript, `Usuario` y `Cliente`, ambas con la misma estructura pero con intenciones diferentes:

```typescript
interface Usuario {
    nombre: string;
    edad: number;
}

interface Cliente {
    nombre: string;
    edad: number;
}
```

En un sistema de tipos estructural, `Usuario` y `Cliente` son considerados iguales debido a su estructura idéntica. Esto puede llevar a situaciones ambiguas donde se asignan tipos incorrectos sin errores de compilación:

```typescript
let cliente: Cliente = { nombre: "Ana", edad: 25 } as Usuario; // Válido en TypeScript
```

Aunque `Usuario` y `Cliente` tienen la misma estructura, pueden representar conceptos diferentes en la lógica del programa. Esta flexibilidad puede resultar en errores difíciles de detectar, ya que el sistema de tipos no impone restricciones basadas en los nombres de los tipos.

Este ejemplo ilustra cómo un sistema de tipos estructural puede ser menos seguro en comparación con un sistema de tipos nominal, donde tales asignaciones no serían permitidas sin una conversión explícita.



## Uso de Tipos en TypeScript

TypeScript utiliza principalmente un sistema de tipos estructural, lo que significa que la compatibilidad de tipos se basa en la estructura o forma de los tipos. Sin embargo, también puede incorporar características de un sistema de tipos nominal en ciertos contextos, especialmente cuando se utilizan clases y tipos de unión discriminados.

### Tipos Estructurales en TypeScript

En TypeScript, dos tipos son considerados compatibles si tienen la misma estructura, independientemente de sus nombres. Esto permite una mayor flexibilidad y reutilización de código. Por ejemplo:

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado {
    nombre: string;
    edad: number;
}

let persona: Persona = { nombre: "Juan", edad: 30 } as Empleado; // Válido en TypeScript
```

### Tipos Nominales en TypeScript

Aunque TypeScript no implementa un sistema de tipos nominal puro, se pueden lograr comportamientos similares utilizando clases y tipos de unión discriminados. Por ejemplo, al usar clases, los tipos son considerados diferentes incluso si tienen la misma estructura:

```typescript
class Persona {
    nombre: string;
    edad: number;
}

class Empleado {
    nombre: string;
    edad: number;
}

let persona: Persona = new Empleado(); // Error de tipo
```

### Tipos de Unión Discriminados

TypeScript también permite la creación de tipos de unión discriminados, que combinan características de los sistemas de tipos nominales y estructurales. Estos tipos utilizan una propiedad común para discriminar entre diferentes variantes de un tipo:

```typescript
type Animal = 
    | { tipo: "perro"; nombre: string; ladra: boolean }
    | { tipo: "gato"; nombre: string; maulla: boolean };

function describirAnimal(animal: Animal) {
    if (animal.tipo === "perro") {
        console.log(`${animal.nombre} puede ladrar: ${animal.ladra}`);
    } else {
        console.log(`${animal.nombre} puede maullar: ${animal.maulla}`);
    }
}
```

En resumen, TypeScript utiliza principalmente un sistema de tipos estructural, pero también puede incorporar características de un sistema de tipos nominal en ciertos contextos, proporcionando una combinación flexible y poderosa para la verificación de tipos.



## Tipos Varios
Además de los sistemas de tipos nominales y estructurales, existen otros enfoques y combinaciones. Algunos lenguajes pueden utilizar un sistema de tipos híbrido que incorpora características de ambos enfoques. Otros pueden incluir sistemas de tipos dependientes, donde los tipos pueden depender de valores, o sistemas de tipos subestructurales, que permiten más flexibilidad en la compatibilidad de tipos.


## Tipos Básicos
Los tipos básicos en TypeScript incluyen `string`, `number`, `boolean`, `null`, `undefined`, y `symbol`. Estos tipos son fundamentales y se utilizan para definir las variables más comunes en el lenguaje. Además, TypeScript introduce el tipo `any`, que permite desactivar la verificación de tipos, y el tipo `unknown`, que es más seguro que `any` ya que requiere una verificación de tipo antes de su uso.