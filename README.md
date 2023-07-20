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

## HTTP Methods

Existe un conjunto de métodos HTTP que se utilizan para indicar la acción que se quiere realizar sobre un recurso. Los más usados son GET, POST, PUT y DELETE.

- **GET:** Se utiliza para obtener un recurso del servidor. Por ejemplo, cuando se quiere obtener un usuario, un producto o una categoría.
- **POST:** Se utiliza para crear un recurso en el servidor. Por ejemplo, cuando se quiere crear un usuario, un producto o una categoría.
- **PUT:** Se utiliza para actualizar un recurso en el servidor. Por ejemplo, cuando se quiere actualizar un usuario, un producto o una categoría. Es importante tener en cuenta que PUT se utiliza para actualizar un recurso completo, es decir, que si se envía un recurso con un campo faltante, ese campo se va a eliminar del recurso en el servidor.
- **PATCH:** Se utiliza para actualizar parcialmente un recurso en el servidor. Por ejemplo, cuando se quiere actualizar el nombre de un usuario, el precio de un producto o el nombre de una categoría. Este se diferencia de PUT en que PATCH solo actualiza los campos que se envían en la petición, y no elimina los campos que no se envían.
- **DELETE:** Se utiliza para eliminar un recurso del servidor. Por ejemplo, cuando se quiere eliminar un usuario, un producto o una categoría.

Estos verbos indican al servidor qué acción buscamos hacer en el endpoint al que estamos haciendo la petición.

Existen otros métodos HTTP, pero no son tan usados como los anteriores. Algunos de ellos son:

- **OPCIONS:** Se utiliza para obtener los métodos HTTP que están disponibles en un endpoint.
- **TRACE:** Se utiliza para hacer un loopback de la petición. Es decir, que el servidor devuelve la misma petición que recibe.
- **CONNECT:** Se utiliza para convertir la conexión de red en un túnel seguro y encriptado.

## API Keys

Son métodos de autenticación que se utilizan para identificar a la aplicación que está haciendo una petición a una API. Se utilizan para evitar que personas no autorizadas hagan peticiones a la API y para limitar la cantidad de peticiones que se pueden hacer en un período de tiempo.

### Autenticación vs Autorización

Es importante entender la diferencia entre autenticación y autorización. Generalmente, la autenticación es el primer paso para acceder a un recurso, y la autorización es el segundo paso, después de la autenticación.

La **autenticación** es el proceso de verificar la identidad de un usuario. Por ejemplo, cuando inicias sesión en una aplicación, estás autenticando tu identidad.

La **autorización** es el proceso de verificar qué recursos tiene permitido acceder un usuario. Por ejemplo, cuando inicias sesión en una aplicación, es posible que tengas permiso para ver ciertas páginas, pero no otras.

Existen muchas formas de autenticación. Una muy usada es la autenticación basada en tokens. En este tipo de autenticación, el servidor genera un token único para cada usuario que se autentica. Este token se envía al cliente y se almacena en el navegador. Luego, cada vez que el cliente hace una petición al servidor, el token se envía junto con la petición. El servidor verifica que el token sea válido y, si lo es, permite que el cliente acceda al recurso solicitado. A este tipo de autenticación se lo conoce como **autenticación basada en tokens** o **API Keys**.

### Cómo se crean estos tokens

No existe ningún constraint para implementar esto. Cada sistema genera sus tokens de forma diferente. La más usada es un hash de 32 caracteres generado con el algoritmo MD5 o números al azar. Otros sistemas generan un string combinando valores aleatorios junto con información del usuario, como su nombre de usuario, su email, su rol, hardware, IP, etc.

### Otras formas de autorización

- **Basic Auth:** Es un método de autenticación que envía el usuario y la contraseña en cada petición. Es muy inseguro porque la información viaja en texto plano.
- **Bearers Tokens:** Es un método de autenticación que envía un token en cada petición. Es más seguro que Basic Auth porque la información viaja encriptada.
- **OAuth:** Es un protocolo de autorización que permite a una aplicación acceder a los recursos de un usuario en un servidor. Por ejemplo, cuando una aplicación te permite iniciar sesión con tu cuenta de Google, está utilizando OAuth para acceder a tu información de Google. Este es el método de autenticación más seguro y complejo de todos.
- **Access Key + Secret Key:** Es un método de autenticación que envía un par de claves en cada petición. Es más seguro que Basic Auth porque la información viaja encriptada.

### Cómo se envían estos tokens

Se pueden enviar de dos formas más usadas: en el header de la petición o como un query parameter. También se pueden enviar en el body de la petición, pero no es muy común o como un costum header.

#### En el header de la petición

```js
header: {
  'x-api-key' : '123456789'
}
```

#### En el query parameter

```js
const API = 'https://api.example.com/v1/endPoint?api_key=123456789';
```
