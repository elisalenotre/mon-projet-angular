import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  products: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

}
