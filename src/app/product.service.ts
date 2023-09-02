import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

  getProducts(): string[] {
    return this.products;
  }  

}
