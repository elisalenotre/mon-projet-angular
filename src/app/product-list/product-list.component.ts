import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.scss']
})

export class ProductListComponent implements OnInit {
  cartService: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 50 }, ]

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}