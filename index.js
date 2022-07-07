const container = require("./clase.js")
const express = require('express');
const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${server.address().port}`);
  });


const products = new container.Contenedor('productos.txt');

app.get('/', (req, res) => {
    res.send("<h1 style=color:blue>Para visualizar todos los productos ir a la ruta /productos</h1> <h1 style=color:green>Para un producto aleatorio ir a la ruta /productoRandom</h1>");
})

app.get('/productos', async (req, res) => {
  try {
  const showProduct = await products.getAll();
  res.send(showProduct);
  }catch (error) {console.log (error)}
})


app.get('/productoRandom', async (req, res) => {
  try{
  const showRandomProduct = await products.getAll();
  const randomNum = Math.floor(Math.random() * showRandomProduct.length);
  res.send(showRandomProduct[randomNum]);
  }
  catch (error) {console.log (error)}
});
