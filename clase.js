const fs = require('fs');
const { text } = require('stream/consumers');
class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }
    async save(product) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const products = eval(data);
            product.id = products.length + 1;
            if (products.length > 0) {
                products.map(products => {
                    if (products.id === product.id) {
                        product.id = product.id + 1;
                    }
                });
            }
            products.push(product);
            await fs.promises.writeFile(this.archivo, JSON.stringify(products, null, 2));
            return product.id;
        }
        catch (error) {
            console.log("hubo un error al guardar", error);
        }
    }
    async getById(id) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = eval(data);
            const producto = productos.find(product => product.id === id);
            return producto;
        }
        catch (error) {
            console.log("hubo un error al obtener ID",error);
            return null;
        }
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = eval(data);
            return productos;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletebyID(id) {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8');
            const productos = eval(data);
            productos.map(products => {
                if (products.id === id) {
                    productos.splice(productos.indexOf(products), 1);
                }
            });
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos));
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]));
        }
        catch (error) {
            console.log(error);
        }
    }
};

exports.Contenedor= Contenedor