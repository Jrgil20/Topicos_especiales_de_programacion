enum TamañoCafé {
    Pequeño = "Pequeño",
    Mediano = "Mediano",
    Grande = "Grande"
}

interface Café {
    tipo: string;
    tamaño: TamañoCafé;
    precio: number;
}

const cafés: Café[] = [
    { tipo: "Espresso", tamaño: TamañoCafé.Pequeño, precio: 2.5 },
    { tipo: "Latte", tamaño: TamañoCafé.Mediano, precio: 3.5 },
    { tipo: "Cappuccino", tamaño: TamañoCafé.Grande, precio: 4.0 },
    { tipo: "Americano", tamaño: TamañoCafé.Mediano, precio: 3.0 },
    { tipo: "Mocha", tamaño: TamañoCafé.Pequeño, precio: 3.2 }
];

// Filtrar los cafés de tamaño mediano
const cafésMedianos = cafés.filter(café => café.tamaño === TamañoCafé.Mediano);

// Transformar el arreglo para contener solo el nombre del café y su precio con formato de moneda
const cafésTransformados = cafésMedianos.map(café => ({
    nombre: café.tipo,
    precio: `$${café.precio.toFixed(2)}`
}));

console.log(cafésTransformados);