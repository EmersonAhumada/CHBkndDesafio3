const test = require("./clase");
const Product = async () => {
const container = new test.Contenedor("./productos.txt");
const Product = {
  title: "Lapiz",
  price: 100,
  thumbnail:"/",
  id: "",
};

// -METHODS-

//-Save-
//let productID = await container.save(Product);
//console.log('Product ID: ', productID);

//-GetbyID-
//let productByID= await container.getById(3);
//console.log('Product by ID: ', productByID)

//-GetALL-
//let getALL= await container.getAll();
//console.log('Get All: ', getALL)

//-DeletebyID-

//await container.deletebyID(1);

//DeleteALL

//await container.deleteAll();

};

Product()