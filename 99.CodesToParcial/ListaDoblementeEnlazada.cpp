
struct Nodo {
    int data;
    Nodo *anterior; // se mueve hacia la atras (izquierda)
    Nodo *proximo; // se mueve hacia adelante (derecha)
};

struct Lista_dob_enl{
    Nodo* cabeza = nullptr; //apunta al comienzo de la lista
    Nodo* cola = nullptr; //apunta al final de la lista
    int num_elem=0; // guarda el valor dentro del nodo
};

// crea una nueva lista doblemente enlazada
Lista_dob_enl& crear_lista_vacia(){
    Lista_dob_enl * p = new Lista_dob_enl; // crea un nuevo nodo
    p->cabeza = new Nodo{0,nullptr, nullptr}; // asignar valores a la estructura en cabeza
    p->cola = new Nodo{0,p->cabeza, nullptr}; // asignar valores a la estructura en cola
    (p->cabeza)->proximo = p->cola;
    p->num_elem =0;
    return (*p);
}

// si la lista esta vacia, sin elementos
bool esVacia(const Lista_dob_enl &lista){
    return (lista.num_elem == 0);
}

// halla la referencia "cursor"
Nodo* Obtener_Ref(Lista_dob_enl &lista, int pos){
    // pos debe estar entre 0 y numero de elementos de la lista
    Nodo* cursor = (lista.cabeza)->proximo;
    int posicion=0; //me indicará la posición del elemento en el recorrido
    while (posicion != pos){
    cursor = cursor->proximo; //p apunta al elemento en la posición "posicion"
    posicion++;
    }
    return cursor; // note que si la lista está vacía devuelve apuntador al centinela cola
}
void insertar(Lista_dob_enl &lista, int x, int pos){
    // Inserta x en la posiciÃ³n pos de lista
    if (pos < 0 || pos > lista.num_elem) return;
    Nodo* cursor = Obtener_Ref(lista,pos); // apunta a la posicion asignada
    Nodo* nuevo = new Nodo{x,cursor->anterior,cursor};
    (cursor->anterior)->proximo = nuevo;
    cursor->anterior = nuevo; // se
    (lista.num_elem)++; // lista.num_elem = lista.num_elem + 1
}

void eliminar(Lista_dob_enl &lista, int pos){
    // si alguna de las condiciones es verdadera se saldra sin hacer algun cambio;
    if (pos < 0 || pos >= lista.num_elem) return; 
        /* Si "la posicion es
        negativa" o " si 'pos' es mayor o igual que el número de elementos en
        lista" */
    Nodo* cursor = Obtener_Ref(lista,pos);
    (cursor->anterior)->proximo = cursor->proximo;
    (cursor->proximo)->anterior = cursor->anterior;
    (lista.num_elem)--; // lista.num_elem = lista.num_elem - 1
}

void imprimir(const Lista_dob_enl &lista){
    // imprime lista
    Nodo* p = lista.cabeza->proximo;
    while (p != lista.cola){
    cout << p->data << " ";
    p = p->proximo;
    }
    cout << endl;
}

int main(){
    Lista_dob_enl listaDoble = crear_lista_vacia();
    insertar(listaDoble,8,0);
    insertar(listaDoble,30,1);
    insertar(listaDoble,5,2);
    insertar(listaDoble,7,3);
    insertar(listaDoble,24,4);
    eliminar(listaDoble,1); // elimina en la posicion "1"
    //eliminar(listaDoble,2);
    imprimir(listaDoble);
    return 0;
}