enum CategoriaProducto {
    Electronico = "electronico",
    Ropa = "ropa",
    Alimento = "alimento"
}

interface Producto<T> {
    id: string;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    data: T;
}

class ProductoElectronico implements Producto<string> {
    id: string;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    data: string;
    marca: string;

    constructor(id: string, nombre: string, precio: number, marca: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = CategoriaProducto.Electronico;
        this.data = marca;
        this.marca = marca;
    }
}

class ProductoRopa implements Producto<string> {
    id: string;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    data: string;
    talla: string;

    constructor(id: string, nombre: string, precio: number, talla: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = CategoriaProducto.Ropa;
        this.data = talla;
        this.talla = talla;
    }
}

class ProductoAlimento implements Producto<Date> {
    id: string;
    nombre: string;
    precio: number;
    categoria: CategoriaProducto;
    data: Date;
    fechaCaducidad: Date;

    constructor(id: string, nombre: string, precio: number, fechaCaducidad: Date) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = CategoriaProducto.Alimento;
        this.data = fechaCaducidad;
        this.fechaCaducidad = fechaCaducidad;
    }
}

class Inventario {
    private productos: Producto<any>[] = [];

    agregarProducto(producto: Producto<any>): void {
        this.productos.push(producto);
    }

    eliminarProducto(id: string): void {
        this.productos = this.productos.filter(producto => producto.id !== id);
    }

    buscarPorCategoria(categoria: CategoriaProducto): Producto<any>[] {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
}

// Ejemplo de uso
const inventario = new Inventario();

const producto1 = new ProductoElectronico("1", "Laptop", 1500, "Dell");
const producto2 = new ProductoRopa("2", "Camiseta", 20, "M");
const producto3 = new ProductoAlimento("3", "Manzana", 1, new Date(2023, 11, 31));

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);

console.log(inventario.buscarPorCategoria(CategoriaProducto.Electronico));
console.log(inventario.buscarPorCategoria(CategoriaProducto.Ropa));
console.log(inventario.buscarPorCategoria(CategoriaProducto.Alimento));