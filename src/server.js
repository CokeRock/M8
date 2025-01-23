import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './src/routes/user.routes.js';
import bootcampRoutes from './src/routes/bootCamp.routes.js';
import open from 'open'; // Importar el módulo open

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PUERTO = 5150;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rutas de API
app.use(userRoutes);
app.use(bootcampRoutes);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

// Iniciar el servidor
(async function startServer() {
  try {
    app.listen(PUERTO, async () => {
      console.log(`Servidor escuchando en http://localhost:${PUERTO}`);

      // Abrir la URL automáticamente en el navegador
      await open(`http://localhost:${PUERTO}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor o inicializar la base de datos:", error);
  }
})();
