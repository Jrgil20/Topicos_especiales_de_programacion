include "lista_simple_cent.h"
typedef Lista_con_centinela Cola;

#include "cola.h"

// devuelve cola vacia
Cola& crearColaVacia() {
    return crearListaVacia();
}

// el frente es el primero de la list vaciaa
// se supone que la cola no esta vacia
int frente(const Cola& cola){
    return cola.centinela->proximo->data;
}

// elimina el frente de la cola
// se supone que la cola no esta vacia
void desencolar(Cola& cola){
    eliminar(cola, 0);
}

// inserta elem de ultimo en la lista
void encolar(Cola& cola, int elem){
    insertar(cola, elem, cola.num_elem);
}

// devuelve el num. de elementos
int num_elem_cola(const Cola& cola){
    return cola.num_elem;
}
// imprime cola
void imprimir_cola(const Cola& cola){
    imprimir(cola);
}
// bool esVacia(const Cola& cola) no se define
// porque es la misma que esVacia de List_con_centinela