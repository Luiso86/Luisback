Luis Novoa
Proyecto Backend - Pre-entrega


Este script permite interactuar con la API de FakeStore para crear, consultar y eliminar productos desde la terminal.


Funcionalidades implementada:

 method.toUpperCase() y resource.toLowerCase() -Normaliza el método y el recurso para evitar errores por mayúsculas/minúscula,

 POST /products -Crea un nuevo producto con title, price y category,

 GET /product/:id -Consulta un producto específico por su ID.
 
 DELETE /products/:id -Elimina un producto por su ID.

Tecnologias utilizadas

Node.js,

fetch para realizar peticiones HTTP,

Destructuring de arrays (process.argv),

Manejo de errores con .catch()


Nota : Quizas pueda mejorar un poco el codigo , ya que tiene cierta repeticion y mejoraria la legibilidad para el mantenimiento y escalar el proyecto.

