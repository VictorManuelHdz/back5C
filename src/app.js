// importamos la libreria
import express from 'express'

// creamos el objeto de espress para nuestra aplicacion
const app = express();
// Definimos nuestro puerto de conexion
const PORT = 3000;

app.get('/', (req, res)=> {
    res.send("esto es un perimer API desde express...");
})

app.listen(PORT, ()=>{
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})