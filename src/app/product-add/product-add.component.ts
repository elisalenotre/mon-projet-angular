import { Component } from '@angular/core';
import { ProductFormModel } from '../product-form.model';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['../app.component.scss']
})
export class ProductAddComponent {
  product: ProductFormModel = {
    name: '',
    price: 0,
    description: ''
  };

  constructor(private productService: ProductService) { }

  onSubmit() {
    this.productService.addProduct(this.product);

    this.product = {
      name: '',
      price: 0,
      description: ''
    };
  }
}
