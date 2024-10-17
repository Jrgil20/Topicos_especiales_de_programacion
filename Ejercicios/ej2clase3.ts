type Producto = [string, number, 'en stock' | 'agotado'];

// Crear un arreglo de productos
const productos: Producto[] = [
    ['Laptop', 1500, 'en stock'],
    ['Mouse', 25, 'agotado'],
    ['Teclado', 45, 'en stock'],
    ['Monitor', 300, 'en stock'],
    ['Impresora', 120, 'agotado']
];

// Filtrar los productos que estén en stock
const productosEnStock = productos.filter(producto => producto[2] === 'en stock');

// Transformar: Crear un nuevo arreglo donde cada elemento sea una cadena de texto
const productosTransformados = productosEnStock.map(producto => {
    const [nombre, precio] = producto;
    return `${nombre} - $${precio.toFixed(2)}`;
});

// Ordenar el nuevo arreglo de forma ascendente por precio
const productosOrdenados = productosTransformados.sort((a, b) => {
    const precioA = parseFloat(a.split(' - $')[1]);
    const precioB = parseFloat(b.split(' - $')[1]);
    return precioA - precioB;
});

console.log(productosOrdenados);