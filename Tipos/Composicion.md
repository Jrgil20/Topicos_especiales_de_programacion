# Composición y Tipos de Datos Algebraicos
La composición o tipos de datos compuestos se refieren a la forma en que se combinan y estructuran diferentes tipos de datos para formar tipos más complejos. En TypeScript, esto se puede lograr mediante el uso de interfaces, tipos y clases. La composición de datos permite crear estructuras de datos más ricas y expresivas, facilitando la modelación de problemas del mundo real.

## Tipos de Datos Compuestos en TypeScript

### Tuplas
Las tuplas en TypeScript permiten definir un arreglo con un número fijo de elementos, donde cada elemento puede tener un tipo diferente. Son útiles para representar estructuras de datos heterogéneas.

```typescript
let tupla: [string, number];
tupla = ["Hola", 42]; // Correcto
tupla = [42, "Hola"]; // Error: los tipos no coinciden
```

Las tuplas también pueden tener elementos opcionales y etiquetas para mejorar la legibilidad.

```typescript
type Punto3D = [x: number, y: number, z: number?];
let punto: Punto3D = [1, 2];
let otroPunto: Punto3D = [1, 2, 3];
```


### Interfaces
Las interfaces en TypeScript permiten definir la forma de un objeto. Son útiles para describir la estructura de datos y asegurar que los objetos cumplan con ciertos contratos.

```typescript
interface Persona {
    nombre: string;
    edad: number;
}
```

### Tipos
Los tipos en TypeScript son similares a las interfaces, pero permiten más flexibilidad, como la combinación de tipos existentes.

```typescript
type Coordenadas = {
    x: number;
    y: number;
};
```

### Clases
Las clases en TypeScript permiten definir objetos con propiedades y métodos. Son una forma más robusta de crear tipos de datos compuestos.

```typescript
class Punto {
    constructor(public x: number, public y: number) {}
    
    mover(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}
```

### Uniones y Intersecciones

TypeScript también permite la creación de tipos compuestos mediante uniones (`|`) e intersecciones (`&`).

```typescript
type Resultado = Exito | Error;

interface Exito {
    exito: true;
    datos: any;
}

interface Error {
    exito: false;
    mensaje: string;
}
```

Estos mecanismos permiten crear tipos de datos más complejos y flexibles, facilitando la modelación de estructuras de datos en aplicaciones TypeScript.


## Tipos de Datos Algebraicos
Los tipos de datos algebraicos son una forma de combinar tipos para crear nuevos tipos. Existen dos tipos principales de datos algebraicos: los tipos de unión y los tipos de producto.

### Tipos de Unión
Un tipo de unión permite que una variable pueda ser de uno de varios tipos. En TypeScript, se utiliza el operador `|` para definir tipos de unión.

```typescript
type Resultado = "exito" | "error";

function procesarResultado(resultado: Resultado): void {
    if (resultado === "exito") {
        console.log("Operación exitosa");
    } else {
        console.log("Ocurrió un error");
    }
}
```

### Tipos de Producto
Un tipo de producto combina varios tipos en una sola estructura. En TypeScript, esto se puede lograr mediante el uso de interfaces o tipos.

```typescript
interface Punto {
    x: number;
    y: number;
}

const punto: Punto = { x: 10, y: 20 };
```

### Ventajas de los Tipos de Datos Algebraicos
- **Expresividad**: Permiten describir estructuras de datos complejas de manera clara y concisa.
- **Seguridad de Tipos**: Ayudan a prevenir errores al garantizar que las operaciones realizadas en los datos sean válidas según sus tipos.
- **Flexibilidad**: Facilitan la creación de APIs y funciones más flexibles y reutilizables.