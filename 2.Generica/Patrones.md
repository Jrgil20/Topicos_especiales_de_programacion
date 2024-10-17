# Patrones de Diseño

## Patrón Factory
El patrón Factory es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

### Ejemplo
```python
class Producto:
    def operacion(self):
        pass

class ProductoConcretoA(Producto):
    def operacion(self):
        return "Resultado de ProductoConcretoA"

class ProductoConcretoB(Producto):
    def operacion(self):
        return "Resultado de ProductoConcretoB"

class Creador:
    def factory_method(self):
        pass

    def alguna_operacion(self):
        producto = self.factory_method()
        return f"Creador: El mismo código de creador ha trabajado con {producto.operacion()}"

class CreadorConcretoA(Creador):
    def factory_method(self):
        return ProductoConcretoA()

class CreadorConcretoB(Creador):
    def factory_method(self):
        return ProductoConcretoB()

# Uso
creador = CreadorConcretoA()
print(creador.alguna_operacion())

creador = CreadorConcretoB()
print(creador.alguna_operacion())
```

## Patrón Decorador
El patrón Decorador es un patrón de diseño estructural que permite añadir funcionalidades a un objeto de manera dinámica. Los decoradores proporcionan una alternativa flexible a la herencia para extender la funcionalidad.

### Ejemplo
```python
class Componente:
    def operacion(self):
        pass

class ComponenteConcreto(Componente):
    def operacion(self):
        return "ComponenteConcreto"

class Decorador(Componente):
    def __init__(self, componente):
        self._componente = componente

    def operacion(self):
        return self._componente.operacion()

class DecoradorConcretoA(Decorador):
    def operacion(self):
        return f"DecoradorConcretoA({self._componente.operacion()})"

class DecoradorConcretoB(Decorador):
    def operacion(self):
        return f"DecoradorConcretoB({self._componente.operacion()})"

# Uso
componente = ComponenteConcreto()
decorador1 = DecoradorConcretoA(componente)
decorador2 = DecoradorConcretoB(decorador1)
print(decorador2.operacion())
```