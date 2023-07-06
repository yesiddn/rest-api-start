# REST API

Una buena RESTful API que cumple con todos los constrainst de REST debería tener una clara documentación que especifique cada uno de los endpoints y query parameters disponibles para solicitar, editar, crear o eliminar recursos en el servidor

## Endpoints

Un **endpoint** es una ubicación digital por la cual una API recibe peticiones para acceder a un recurso en el servidor. Típicamente, es una URL que provee la ubicación de un recurso específico.

Ejemplos de endpoints:

- Para obtener todos los usuarios: `https://api.example.com/users`
- Para obtener todos los productos: `https://api.example.com/products`
- Para obtener una categoría específica: `https://api.example.com/categories/:id`

## Query parameters

Los **query parameters** son una extensión de las URLs que se utilizan en las peticiones a una API. Son pares de key-value que contienen información adicional para filtrar, ordenar o paginar los resultados de una petición. Se agregan al final de la URL con el símbolo `?` y se separan con el símbolo `&`.

Ejemplos de query parameters:

- Para obtener los primeros 10 usuarios: `https://api.example.com/users?limit=10`
- Para obtener los usuarios que se llamen "John" y sean de la ciudad de "New York": `https://api.example.com/users?name=John&city=New%20York`
- Para obtener los 5 productos en la página 2: `https://api.example.com/products?limit=5&page=2`
