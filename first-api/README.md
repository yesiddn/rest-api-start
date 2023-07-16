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

## HTTP Status Codes

Son códigos numéricos que indican el estado de una petición HTTP. Son útiles para saber si una petición fue exitosa o no, y en caso de que no lo haya sido, saber el motivo del error.
Los códigos de estado HTTP se dividen en 5 «tipos». Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico.

Las cinco clases incluyen:

- **1xx:** Respuestas informativas. Indica que la solicitud fue recibida y procesada correctamente, pero no se ha completado.
- **2xx:** Respuestas satisfactorias. Los códigos con éxito regresan cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.
- **3xx:** Redirecciones. Indica que el cliente debe tomar medidas adicionales para completar la solicitud. Devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
- **400:** Errores del cliente. Indica que el servidor no pudo procesar la solicitud enviada por el cliente debido a un problema en la solicitud.
- **500:** Errores del servidor. Indica que el servidor no pudo completar una solicitud aparentemente válida.

### HTTP Status Code 418

El código de estado HTTP 418 I'm a teapot (Soy una tetera) es un código de estado de error de la familia 4xx. Este código de estado se introdujo en 1998 como una parte de la especificación de protocolo Hyper Text Coffee Pot Control Protocol (HTCPCP), en broma, y no se ha definido en ninguna especificación RFC posterior.

Se puede ver una página de error 418 en el sitio web de [Google](https://www.google.com/teapot).