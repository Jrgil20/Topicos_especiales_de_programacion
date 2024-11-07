enum Plataforma {
    PC,
    Consola,
    Movil
}

enum Genero {
    Accion,
    Aventura,
    RPG
}

interface Videojuego<T, U, V> {
    id: number;
    titulo: U[];
    plataforma: Plataforma;
    genero: Genero;
    data: T;
    precio: V[];
}

class VideojuegoPC implements Videojuego<string[], string, string> {
    id: number;
    titulo: string[];
    plataforma: Plataforma;
    genero: Genero;
    data: string[];
    precio: string[];
    requisitosMinimos: string[];

    constructor(id: number, titulo: string[], plataforma: Plataforma, genero: Genero, data: string[], precio: string[], requisitosMinimos: string[]) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.data = data;
        this.precio = precio;
        this.requisitosMinimos = requisitosMinimos;
    }
}

class VideojuegoConsola implements Videojuego<string[], string, number> {
    id: number;
    titulo: string[];
    plataforma: Plataforma;
    genero: Genero;
    data: string[];
    precio: number[];
    logros: string[];

    constructor(id: number, titulo: string[], plataforma: Plataforma, genero: Genero, data: string[], precio: number[], logros: string[]) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.data = data;
        this.precio = precio;
        this.logros = logros;
    }
}

class VideojuegoMovil implements Videojuego<number, string, string> {
    id: number;
    titulo: string[];
    plataforma: Plataforma;
    genero: Genero;
    data: number;
    precio: string[];
    tamanoDescarga: number;

    constructor(id: number, titulo: string[], plataforma: Plataforma, genero: Genero, data: number, precio: string[], tamanoDescarga: number) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.data = data;
        this.precio = precio;
        this.tamanoDescarga = tamanoDescarga;
    }
}

class BibliotecaVideojuegos {
    private videojuegos: Videojuego<any, any, any>[] = [];

    agregarVideojuego(videojuego: Videojuego<any, any, any>): void {
        this.videojuegos.push(videojuego);
    }

    buscarPorPlataforma(plataforma: Plataforma): Videojuego<any, any, any>[] {
        return this.videojuegos.filter(v => v.plataforma === plataforma);
    }

    buscarPorGenero(genero: Genero): Videojuego<any, any, any>[] {
        return this.videojuegos.filter(v => v.genero === genero);
    }
}

// Ejemplo de uso
const biblioteca = new BibliotecaVideojuegos();

const juegoPC = new VideojuegoPC(1, ["Cyberpunk 2077", "El punk del cyber"], Plataforma.PC, Genero.Accion, ["Windows 10", "8 GB RAM"], ["12 euros", "120 $"], ["Windows 10", "8 GB RAM"]);
const juegoConsola = new VideojuegoConsola(2, ["Cyberpunk 2077", "El punk del cyber"], Plataforma.Consola, Genero.Accion, ["Play 5", "Play 4"], [12, 340], ["Achievement 1", "Achievement 2"]);

biblioteca.agregarVideojuego(juegoPC);
biblioteca.agregarVideojuego(juegoConsola);

console.log(biblioteca.buscarPorPlataforma(Plataforma.Consola));