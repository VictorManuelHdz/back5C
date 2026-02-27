//! importamos la libreria
import express from 'express'
import dontenv from 'dotenv'
import gruposRoutes from './routes/grupos.routes.js'

//! creamos el objeto de espress para nuestra aplicacion
const app = express();

//! Configuro el acceso al archivo .env
dontenv.config();

//! Definimos nuestro puerto de conexion
const port = process.env.PORT || 3000;

//! Implementar un middleware para poder implementar el formato JSON en las solicitudes
app.use(express.json());

//! Rutas
app.use('/api/grupos', gruposRoutes);

app.get('/', (req, res)=> {
    res.send("esto es un perimer API desde express...");
})

app.get('/otra', (req, res)=> {
    res.send("otra ruta");
})

app.listen(port, ()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})

console.log("Aplicacion iniciada correctamente");
