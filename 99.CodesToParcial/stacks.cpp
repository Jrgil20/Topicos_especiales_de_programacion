// El tipo Pila
typedef Lista_con_centinela Pila;
// puedo declarar esVacia() si hago un cast a List_con_centinela
// cuando la defino en el .cpp
// Verificar si la pila v estÃ¡ vacÃa

bool esVacia(Pila&);
// Devuelve una pila vacÃa

Pila& crearPilaVacia() ;
// Empila data en la pila v

void empilar(Pila &pila , int data);
// Desempila el tope
// La pila no puede estar vacÃa

void desempilar(Pila &pila);
// Devuelve el tope de la Pila v
// la pila no debe estar vacÃa

int tope(const Pila &pila);

void imprimir_pila(Pila &pila);

int num_elem_pila(const Pila & pila);
    #include "pila.h"

bool esVacia(Pila& pila){
    // el cast es necesario para que aplique esVacia
    // de Lista_con_centinela
    return esVacia(static_cast<Lista_con_centinela>(pila));}
    //Devuelve una pila vacia

Pila& crearPilaVacia() {
    return crearListaVacia();
}

// Empila data en la pila
void empilar(Pila &pila , int data){
    insertar(pila, data, 0);
}
// Desempila el tope
// La pila no puede estar vacÃa

void desempilar(Pila &pila){ // la pila no debe estar vacÃa
    eliminar(pila,0);
}

// Devuelve el tope de la Pila v
// la pila no debe estar vacÃa
int tope(const Pila &pila){
    return pila.centinela->proximo->data;
}

// Verificar si la pila v estÃ¡ vacÃa
//bool esPilaVacia(const Pila &pila) { return esListaVacia(pila); }
void imprimir_pila(Pila &pila){
    imprimir(pila);
}

int num_elem_pila(const Pila & pila){
    return pila.num_elem;
}

