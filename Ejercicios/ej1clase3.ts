interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
}

const productos: Producto[] = [
    { nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
    { nombre: 'Pantalones', precio: 40, categoria: 'Ropa' },
    { nombre: 'Zapatos', precio: 60, categoria: 'Calzado' },
    { nombre: 'Sombrero', precio: 15, categoria: 'Accesorios' },
];

const productosFiltrados = productos.filter(producto => producto.categoria === 'Ropa');

const productosTransformados = productosFiltrados.map(producto => ({
    ...producto,
    precio: producto.precio * 1.10
}));

const precioTotal = productosTransformados.reduce((total, producto) => total + producto.precio, 0);

console.log('Productos Filtrados y Transformados:', productosTransformados);
console.log('Precio Total:', precioTotal);