# Tipos de Datos

En programación, los tipos de datos son una clasificación de los datos que le dice al compilador o intérprete cómo el programador pretende usar los datos. A continuación se presentan algunos tipos de datos comunes:

## Tipos de Datos Primitivos

Los tipos de datos primitivos son los tipos de datos más básicos y fundamentales que un lenguaje de programación ofrece. Estos tipos de datos no están compuestos por otros tipos de datos y son manejados directamente por el sistema. Los tipos de datos primitivos comunes incluyen:

- **Enteros (int)**: Utilizados para representar números enteros.
- **Flotantes (float)**: Utilizados para representar números con punto decimal.
- **Caracteres (char)**: Utilizados para representar un solo carácter.
- **Booleanos (bool)**: Utilizados para representar valores de verdad, como `true` o `false`.

Estos tipos de datos son esenciales para la construcción de programas y son utilizados para realizar operaciones básicas y almacenar información simple.


## Tipos de Datos Compuestos

Los tipos de datos compuestos son aquellos que se forman combinando otros tipos de datos, ya sean primitivos o compuestos. Estos tipos permiten almacenar y manipular colecciones de datos de manera estructurada y eficiente. A continuación se presentan algunos ejemplos comunes de tipos de datos compuestos:

1. **Arreglos (arrays)**: Colecciones de elementos del mismo tipo.
2. **Estructuras (structs)**: Colecciones de variables bajo un mismo nombre.
3. **Cadenas de caracteres (strings)**: Secuencias de caracteres.
4. **Enumerados (enums)**: Tipos de datos que consisten en un conjunto de valores constantes predefinidos. Son útiles para representar un grupo de opciones limitadas.
5. **Rangos (ranges)**: Representan un intervalo de valores, generalmente numéricos, y se utilizan para iterar sobre una secuencia de números o para definir límites.

Los tipos de datos compuestos sirven para organizar y manejar colecciones de datos de manera más compleja y estructurada. Permiten agrupar múltiples valores, que pueden ser de diferentes tipos, bajo una sola entidad. Esto facilita la manipulación y el acceso a los datos, así como la implementación de estructuras de datos más avanzadas y eficientes en los programas. Además, los tipos de datos compuestos son fundamentales para la creación de algoritmos y estructuras de datos que resuelven problemas más complejos y específicos en la programación.

## Tipos de Datos Abstractos

Los tipos de datos abstractos son aquellos que se definen por su comportamiento (operaciones que se pueden realizar sobre ellos) y no por su implementación. Este código define un tipo de dato abstracto que representa una estructura de datos específica y proporciona las operaciones necesarias para manipular dicha estructura.

1. **Listas (lists)**: Colecciones ordenadas de elementos.
2. **Conjuntos (sets)**: Colecciones de elementos únicos.
3. **Mapas (maps)**: Colecciones de pares clave-valor.

Los tipos de datos abstractos son una abstracción que permite a los programadores utilizar estructuras de datos complejas sin preocuparse por los detalles de implementación subyacentes. Esto facilita el diseño y la implementación de programas, ya que los programadores pueden enfocarse en el comportamiento y la funcionalidad de los tipos de datos sin tener que preocuparse por la implementación interna de las estructuras de datos.

## Tipos de Datos Especiales 

Los tipos de datos especiales son datos que vienen definidos por el lenguaje.

0. **Punteros (pointers)**: Variables que almacenan direcciones de memoria.
1. **Void**: Representa la ausencia de tipo. Se utiliza comúnmente en funciones que no devuelven un valor.
2. **Empty**: Representa un tipo vacío o sin contenido. Se utiliza para indicar que una variable o estructura no contiene datos.
3. **null**: Representa la ausencia intencional de cualquier valor. Es un tipo de dato que solo tiene un valor: `null`.
4. **undefined**: Indica que una variable no ha sido asignada un valor.
5. **NaN (Not a Number)**: Representa un valor que no es un número válido en operaciones matemáticas.
6. **Symbol**: Introducido en ES6, representa un valor único e inmutable que puede ser utilizado como clave de propiedad en objetos.
7. **Any**: En TypeScript, representa un valor que puede ser de cualquier tipo, permitiendo flexibilidad en el tipo de dato.


## Codificación de los Tipos de Datos

La codificación de los tipos de datos se refiere a la forma en que los datos se representan y almacenan en la memoria del ordenador. Existen diferentes esquemas de codificación que se utilizan para representar caracteres y otros tipos de datos. A continuación se presentan algunos esquemas de codificación comunes:

### UTF-8

UTF-8 (8-bit Unicode Transformation Format) es un esquema de codificación de caracteres que puede representar cualquier carácter Unicode. Utiliza entre 1 y 4 bytes para cada carácter, lo que lo hace eficiente en términos de espacio para textos en inglés y otros idiomas que utilizan caracteres ASCII.

### UTF-16

UTF-16 (16-bit Unicode Transformation Format) es otro esquema de codificación de caracteres que utiliza 2 bytes para la mayoría de los caracteres comunes y 4 bytes para caracteres menos comunes. Es ampliamente utilizado en sistemas y aplicaciones que requieren compatibilidad con Unicode.

### UTF-32

UTF-32 (32-bit Unicode Transformation Format) es un esquema de codificación de caracteres que utiliza 4 bytes para cada carácter. Aunque es menos eficiente en términos de espacio, es simple y directo, ya que cada carácter tiene una longitud fija.

### ASCII

ASCII (American Standard Code for Information Interchange) es un esquema de codificación de caracteres que utiliza 7 bits para representar caracteres. Es uno de los esquemas de codificación más antiguos y se utiliza principalmente para representar caracteres en inglés.

### ISO-8859-1

ISO-8859-1, también conocido como Latin-1, es un esquema de codificación de caracteres que utiliza 8 bits para representar caracteres. Es compatible con ASCII y se utiliza para representar caracteres en muchos idiomas europeos.

### Base64

Base64 es un esquema de codificación que se utiliza para representar datos binarios en formato de texto. Es comúnmente utilizado en la transmisión de datos a través de medios que solo soportan texto, como el correo electrónico.

Estos esquemas de codificación son esenciales para la representación y manipulación de datos en diferentes contextos y aplicaciones. La elección del esquema de codificación adecuado depende de los requisitos específicos del sistema y de los datos que se van a manejar.
