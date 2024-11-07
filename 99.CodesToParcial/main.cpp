#include "cola.h"
#include "pila.h"
#include <iostream>

void moverPila(Pila &p1, Pila &p2){
    int x;
    if (esVacia(p1)) return;
    x = tope(p1);
    desempilar(p1);
    moverPila(p1,p2);
    empilar(p2,x);
}

void invertirCola(Cola& cola){
    if (esVacia(cola)) 
        return;
    int f = frente(cola);
    desencolar(cola);
    invertirCola(cola);
    encolar(cola,f);
}

int main(){
    Cola cola = crearColaVacia();
    Pila pila = crearPilaVacia();
    encolar(cola , 0);
    encolar(cola , 1);
    encolar(cola , 2);
    imprimir(cola);
    if (!esVacia(cola)) 
        std::cout << "El frente es: "<< frente(cola) << std::endl;
    invertirCola(cola);
    imprimir(cola);
    if (!esVacia(cola)) 
        std::cout << "El frente es: "<< frente(cola) << std::endl;
    // desencolar(cola);
    // encolar(cola , 10);
    // encolar(cola , 20);
    // imprimir(cola);
    // imprimir(cola);
    empilar(pila,10);
    empilar(pila,100);
    empilar(pila,1000);
    // empilar(pila,10000);
    // desempilar(pila);
    // desempilar(pila);
    // std::cout << "Numero de elementos de la pila: "
    // << num_elem_pila(pila) << std::endl;
    // //desempilar(pila);
    // //desempilar(pila);
    if (esVacia(pila))
        std::cout << "pila es vacia: \n";
    else 
        imprimir_pila(pila);
    Pila p2 = crearPilaVacia();
    moverPila(pila,p2);
    if (esVacia(pila)) 
        std::cout << "pila es vacia: \n";
    else 
        imprimir_pila(pila);
    if (esVacia(p2)) 
        std::cout << "pila es vacia: \n";
    else 
        imprimir_pila(p2);
}