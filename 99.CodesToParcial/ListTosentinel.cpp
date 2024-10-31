#include <iostream>
#include "lista_simple_cent.h"

struct Nodo {
    int data;
    Nodo *proximo;
};

struct Lista_con_centinela{
    Nodo* centinela = nullptr;
    int num_elem=0;
};

Lista_con_centinela& crearListaVacia(){
    // Crea una una lista vacÃa y la devuelve
    Lista_con_centinela * p = new Lista_con_centinela;
    p->centinela = new Nodo{0,nullptr};
    p->num_elem =0;
    return (*p);
}

void insertar(Lista_con_centinela &lista, int x, int pos){
    // Inserta x en la posiciÃ³n pos de lista
    // pos puede ser igual a num_elem
    if (pos <0 || pos > lista.num_elem) return;
    Nodo* cursor = lista.centinela;
    int posicion=-1; //cursor apunta al elemento centinela
    while (posicion < pos-1){
        cursor = cursor->proximo;
        posicion++; //cursor apunta a elem en posicion "posicion"
    }
    // cursor apunta a elemento en posiciÃ³n pos
    Nodo* nuevo = new Nodo{x,cursor->proximo};
    cursor->proximo = nuevo;
    (lista.num_elem)++;
}

void eliminar(Lista_con_centinela &lista, int pos) {
    if ((pos<0)&&(pos>=lista.num_elem)) return;
    Nodo* anterior = lista.centinela;
    int j = -1; // indica la posiciÃ³n del centinela
    // e indicarÃ¡ la posicion del anterior al que hay
    // que eliminar
    while ( j < ( pos -1) ) {
        anterior = anterior->proximo;
        j++;
    }
    Nodo* temp = anterior->proximo;
    anterior->proximo = temp->proximo;
    delete temp;
    lista.num_elem --;
    return;
}

void imprimir(const Lista_con_centinela &lista){
    // imprime lista
    Nodo* p = lista.centinela->proximo;
    while (p != nullptr){
        std::cout << p->data << " ";
        p = p->proximo;
    }
    std::cout << std::endl;
}

bool esVacia(const Lista_con_centinela &lista){
    if (lista.num_elem==0) return true;
    return false;
}

void vaciar(Lista_con_centinela &lista){
    while (lista.centinela != nullptr){
        Nodo * tmp = lista.centinela;
        lista.centinela = lista.centinela->proximo;
        delete tmp;
        lista.num_elem--;
    }
}