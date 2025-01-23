
NOTAS:

La estructura de la aplicación, tal como se menciona en el PDF,
no se rige de manera estricta. A continuación, se describen dos componentes clave:

Carpeta Finall-Drilling-8\src\config\DataBD.js:

Este archivo contiene los datos que se deben ingresar
en la base de datos, organizados en forma de arreglos. Esta organización
permite mantener el código de server.js más
limpio y manejable, evitando la sobrecarga de información.

Finall-Drilling-8\public\index.html: Este archivo representa
la vista que se carga al iniciar server.js. Su propósito es
facilitar la visualización de los datos almacenados en
la base de datos, proporcionando una interfaz accesible para el usuario.


AJUSTES BD:
0.1. Instalar dependencias con "npm i"

1. Se debe crear un Base de datos llamda "db_bootcamp" en postgres

2. Ir a  Finall-Drilling-8\src\config\db.Config.js y reemplazar

const db_bootcamp = new Sequelize(
    "db_bootcamp",
    "postgres",
    "<TU CLAVE PostgreSQL>",
    {
        host: "localhost",
        port: "5432",
        dialect: 'postgres'
    }
);


1. Inicializa la base de datos:

npm run DB

2. Inicia el servidor:

npm start

3. Se abrira un html en el navegador y se podra ejecutar desde ella:

ViewAll () y Registrar un usuario para facilitar la vista y demostrar que funciona la app.

Las demas consultas se deben hacer usando postman ,thunder client u otro programa que sirva para esto.


* Registrar un usuario (acceso público)
Ruta: POST http://localhost:5150/api/signup

Condiciones

- Passwordord > 8 caracteres.
- El correo electrónico único en la BD.
- Los campos != NULL.

Body:

{
  "firstName": "ABC",
  "lastName": "XXX",
  "email": "ABC@correo.com",
  "password": "12345678"
}


SALIDA:

{
  "message": "Usuario registrado exitosamente",
  "id": 5,
  "firstName": "ABC",
  "lastName": "XXX",
  "email": "ABC@correo.com",
  "password": "<hash>",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>"
}


* Inicio de sesión (acceso público)
Ruta: POST http://localhost:5150/api/signin

Body:

{
  "email": "ABC.diaz@correo.com",
  "password": "12345678"
}

Respuesta:

{
  "id": 1,
  "firstName": "ABC",
  "lastName": "XXX",
  "email": "ABC.diaz@correo.com",
  "accesToken": "<jwt_token>"
}

* Crear un bootcamp (requiere inicio de sesión)
Ruta: POST http://localhost:5150/api/bootcamp

Validaciones: Los campos no pueden estar vacíos.

Body:

{
  "title": "Bootcamp de MOD8",
  "cue": 12,
  "description": "Esta es una descripción de MOD8"
}
Respuesta:

{
  "message": "Bootcamp creado exitosamente",
  "id": 4,
  "title": "Bootcamp de MOD8",
  "cue": 12,
  "description": "Esta es una descripción de MOD8",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>"
}
Agregar un usuario a un bootcamp (requiere inicio de sesión)
Ruta: POST http://localhost:5150/api/bootcamp/adduser

Validaciones: Los campos no pueden estar vacíos.

Body:

{
  "idUser": 4,
  "idBootcamp": 3
}
Respuesta:

{
  "id": 3,
  "title": "Bootcamp Big Data",
  "cue": 18,
  "description": "Domina Data Science y herramientas avanzadas.",
  "createdAt": "<timestamp>",
  "updatedAt": "<timestamp>"
}

Listar todos los usuarios (requiere inicio de sesión)
Ruta: GET http://localhost:5150/api/user
Respuesta: Array de usuarios con sus bootcamps asociados.
Listar usuario por ID (requiere inicio de sesión)
Ruta: GET http://localhost:5150/api/user/:id
Respuesta: Usuario con su información y los bootcamps asociados.
Actualizar usuario por ID (requiere inicio de sesión)
Ruta: PUT http://localhost:5150/api/user/:id

Validaciones: Validar que el usuario exista. Los campos no pueden estar vacíos.

Body:

{
  "firstName": "Pedro",
  "lastName": "Sanchez",
  "email": "pedro.sanchez@correo.com",
  "password": "pedro123456"
}
Eliminar usuario por ID (requiere inicio de sesión)
Ruta: DELETE http://localhost:5150/api/user/:id

Validaciones: Validar que el usuario exista.

Respuesta:

{
  "message": "Usuario eliminado exitosamente."
}

Listar bootcamp por ID con usuarios inscritos (requiere inicio de sesión)
Ruta: GET http://localhost:5150/api/bootcamp/:id

Respuesta: Bootcamp con información de los usuarios inscritos.

Listar todos los bootcamps (acceso público)
Ruta: GET http://localhost:5150/api/bootcamp

Respuesta: Array de bootcamps con usuarios inscritos.
Cerrar sesión (requiere inicio de sesión)
Ruta: POST http://localhost:5150/api/signout
message.txt
5 KB
