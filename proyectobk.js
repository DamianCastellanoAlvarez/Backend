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

productManager.addProduct("Yerba Amanecer", "DIGESTIVO - ANALGESICO - ANSIOLÍTICO", 500, "https://i.imgur.com/mnppYza.jpg", "1", 10);
productManager.addProduct("Coco Mate", "DIGESTIVO - ANALGESICO - ANSIOLÍTICO", 500, "https://i.imgur.com/zLLXfBK.jpg", "2", 15);
productManager.addProduct("Yerba Calma", "DIGESTIVO - ANALGESICO - ANSIOLÍTICO", 500, "https://i.imgur.com/eLBvw8o.jpg", "3", 20);
productManager.addProduct("Stevia", "Antidiabética - Antioxidante - Antitumoral", 350, "https://i.imgur.com/y34PFWv.jpg", "4", 12);
productManager.addProduct("Azucar Mascabo", "Antidiabética - Antioxidante - Antitumoral", 350, "https://i.imgur.com/8jzif5w.jpg", "5", 18);
productManager.addProduct("Stevia en Frasco", "Antidiabética - Antioxidante - Antitumoral", 350, "https://i.imgur.com/N6aWb1o.jpg", "6", 23);
productManager.addProduct("Te Rojo", "Te verde - Manzanilla - Flor de Calendula", 650, "https://i.imgur.com/YgndkGW.jpg", "7", 8);
productManager.addProduct("Te Verde", "Te verde - Manzanilla - Flor de Calendula", 650, "https://i.imgur.com/4A4286c.jpg", "8", 14);
productManager.addProduct("Te Negro", "Te verde - Manzanilla - Flor de Calendula", 650, "https://i.imgur.com/i77UaB2.jpg", "9", 25);



//obtener todos los productos
//const products = productManager.getProducts();
    //console.log("Todos los productos:", products);


  // buscar producto por id con el metodo getProductById
const product = productManager.getProductById();
    console.log("Producto encontrado:", product);

const productNotFound = productManager.getProductById(99);
// Producto no encontrado





