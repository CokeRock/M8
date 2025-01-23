AJUSTES BD:

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

- Registrar un usuario (POST /api/signup)
- Iniciar sesión (POST /api/signin)
- Crear un bootcamp (POST /api/bootcamp)
- Agregar un usuario a un bootcamp (POST /api/bootcamp/adduser)
- Listar todos los usuarios (GET /api/user)
- Listar usuario por ID (GET /api/user/:id)
- Actualizar usuario por ID (PUT /api/user/:id)
- Eliminar usuario por ID (DELETE /api/user/:id)
- Listar bootcamp por ID (GET /api/bootcamp/:id)
- Listar todos los bootcamps (GET /api/bootcamp)
- Cerrar sesión (POST /api/signout)
