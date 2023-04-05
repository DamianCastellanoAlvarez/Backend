class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que no se repita el campo "code" y que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }
    if (this.products.some((p) => p.code === code)) {
      console.error("El código del producto ya existe");
      return;
    }

    // Agregar el producto con un id autoincrementable
    const product = {
      id: this.nextId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    console.log("Producto agregado:", product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error("Producto no encontrado");
    }
    return product;
  }
}

const productManager = new ProductManager();

productManager.addProduct("Camisa", "Una camisa bonita", 29.99, "camisa.jpg", "CM001", 10);
productManager.addProduct("Pantalón", "Un pantalón elegante", 39.99, "pantalon.jpg", "PT001", 5);

const products = productManager.getProducts();
    console.log("Todos los productos:", products);

const product = productManager.getProductById(1);
    console.log("Producto encontrado:", product);

const productNotFound = productManager.getProductById(99);
// Producto no encontrado





