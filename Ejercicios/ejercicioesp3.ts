enum EstadoTarea {
    Pendiente = "Pendiente",
    EnProgreso = "En Progreso",
    Completada = "Completada"
}

enum Prioridad {
    Alta = "Alta",
    Media = "Media",
    Baja = "Baja"
}

interface Tarea<T> {
    detalles: T;
    estado: EstadoTarea;
    prioridad: Prioridad;
}

async function ejecutarTarea<T>(tarea: Tarea<T>): Promise<void> {
    try {
        tarea.estado = EstadoTarea.EnProgreso;
        console.log(`Ejecutando tarea con prioridad ${tarea.prioridad}...`);

        await new Promise<void>((resolve) => setTimeout(() => {
            resolve();
        }, 2000)); // Simula el tiempo de ejecución de la tarea

        tarea.estado = EstadoTarea.Completada;
        console.log(`Tarea completada.`);
    } catch (error) {
        console.error(`Error al ejecutar la tarea: ${error}`);
        throw error;
    }
}

// Ejemplo de uso
const tareaEjemplo: Tarea<string> = {
    detalles: "Esta es una tarea de ejemplo",
    estado: EstadoTarea.Pendiente,
    prioridad: Prioridad.Alta
};

ejecutarTarea(tareaEjemplo).then(() => {
    console.log(`Estado final de la tarea: ${tareaEjemplo.estado}`);
}).catch((error) => {
    console.error(`La tarea falló: ${error}`);
});