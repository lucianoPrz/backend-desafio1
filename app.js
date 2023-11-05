class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  //retorna un producto por el id
  getProductById(idProduct) {
    let product = this.products.find((prod) => prod.id === idProduct);

    if (product) {
      return product;
    } else {
      console.log("Not found");
    }
  }

  addProduct(title, description, price, thumbnail, codeProducto, stock) {
    // verifica si el codigo del nuevo prod ya existe
    let productoRegistrado = this.products.some(
      (prod) => prod.code === codeProducto
    );

    if (!productoRegistrado) {

      let id_product = this.products.length;
      
      let product = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: codeProducto,
        stock: stock,
        id_nuevo_producto: ++id_product,
      };

      this.products.push(product);

      return this.products;
    }
  }
}
