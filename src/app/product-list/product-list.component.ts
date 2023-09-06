import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.scss']
})

export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  products: Product[] = [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 50 }
  ];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}