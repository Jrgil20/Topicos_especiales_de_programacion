#include <iostream>
#include "Lista_enlazada.h"

struct Nodo {
    int data; // informacion del nodo
    Nodo *proximo; // enlace a otro
    // nodo
};

struct Lista_enlazada {
    Nodo* apun_cabeza;
    int num_elem; // mantenemos el nÃºmero de elementos
};

Lista_enlazada& crearlista_vacia(){
    Lista_enlazada * p = new
    Lista_enlazada{nullptr,0};
    return (*p);
}

int num_elem(const Lista_enlazada &lista){
    return lista.num_elem;
}

void vaciar_lista(Lista_enlazada &lista){ //necesito & porque modifico
    lista
    for (Nodo *cursor = lista.apun_cabeza, *temp;
    cursor != nullptr; ) {
        temp = cursor;
    cursor = cursor->proximo;
    delete temp;
    }
    lista.apun_cabeza = nullptr;
    lista.num_elem = 0;
}

void insertar_primero(Lista_enlazada &lista, int n){
    if (lista.apun_cabeza == nullptr)
        lista.apun_cabeza = new Nodo{n,nullptr} ;
    else // lo inserta de primero
        lista.apun_cabeza = new Nodo{n,lista.apun_cabeza};
    lista.num_elem++;
}

void eliminar_primero(Lista_enlazada &lista){
    if (lista.apun_cabeza!=nullptr){
        Nodo* temp = lista.apun_cabeza;
        lista.apun_cabeza = (lista.apun_cabeza)->proximo;
        delete temp;
        lista.num_elem--;
    }
}

void imprimir(const Lista_enlazada &lista){ 
    /* no permite const Nodo*
    pues lo asignamos al pointer "cursor" y
    esto seria ilegal pues podriamos modificar
    los valores a los que apunta la constante */
    for (Nodo *cursor = lista.apun_cabeza; cursor != nullptr;
        cursor = (*cursor).proximo)
    std::cout << cursor->data << ' ';
    std::cout << '\n';
}

bool esvacia(const Lista_enlazada &lista){
    if (lista.num_elem == 0) 
        return true;
    else 
        return false;
}
