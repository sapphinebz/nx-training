import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'digital-lending-workspace-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$ = this.productService.queryProducts();

  // list = ['Cat', 'Dog', 'Pokemon']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
