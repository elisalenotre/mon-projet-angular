import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductFormModel } from './product-form.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }  

  addProduct(product: ProductFormModel) {
    const newId = this.products.length + 1;
  
    const newProduct: Product = {
      id: newId,
      name: product.name,
    };
    
    this.products.push(newProduct);
  }
  
}
