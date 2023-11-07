class ProductManager {
  constructor() {
    this.products = [];
  }
  
  // retorna todos los productos registrados
  getProducts() {
    return this.products;
  }

  //retorna un producto por el id
  getProductById(idProduct) {

    //cónsulta si el prod existe
    let product = this.products.find((prod) => prod.id === idProduct);

    if (product) {
      return product;
    } else {
      return "Not found";
    }
  }

  // agrega un nuevo producto a this.products
  addProduct(title, description, price, thumbnail, code, stock) {

    let id_product = this.products.length;

    // valida que todos los campos requeridos tengan datos
    if (!title || !description || !price || !thumbnail || !code) {
      return "Todos los datos son obligatorios"
    }

    // Valida que el code no se encuentre registrado
    let codeRegistrado = this.products.find(prod => prod.code === code);

    if (codeRegistrado) {
      return `El codigo: ${code} ya se encuentra registrado.`
    }

    // crea el obj producto
    const product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: ++id_product,
    };

    this.products.push(product);

    return this.products;
  }
}









