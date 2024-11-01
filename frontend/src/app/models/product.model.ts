export class Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    quantity: number;
  
    constructor(id: number, name: string, price: number, quantity: number, description?: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  }
  
