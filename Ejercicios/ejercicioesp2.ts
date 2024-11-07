enum TipoDato {
    Usuario = 'Usuario',
    Producto = 'Producto',
    Orden = 'Orden'
}

function cargarDatos(tipoDato: TipoDato): Promise<unknown[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (tipoDato) {
                case TipoDato.Usuario:
                    resolve([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'Ana' }]);
                    break;
                case TipoDato.Producto:
                    resolve([{ id: 1, nombre: 'Laptop' }, { id: 2, nombre: 'Teléfono' }]);
                    break;
                case TipoDato.Orden:
                    resolve([{ id: 1, producto: 'Laptop', cantidad: 1 }, { id: 2, producto: 'Teléfono', cantidad: 2 }]);
                    break;
                default:
                    reject('Tipo de dato no soportado');
            }
        }, 1000);
    });
}

async function mostrarDatos(tipoDato: TipoDato) {
    try {
        const datos = await cargarDatos(tipoDato);
        console.log(`Datos de tipo ${tipoDato}:`, JSON.stringify(datos, null, 2));
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Ejemplo de uso:
mostrarDatos(TipoDato.Usuario);
mostrarDatos(TipoDato.Producto);
mostrarDatos(TipoDato.Orden);